import { useState, useEffect } from "react";
import DashboardPageModel from "../Models/DashboardPageModel";
import TaskFormFields from "./TaskFormFields";
import useTaskCreation from "./useTaskCreation";

export default function DashboardPageViewModel() {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationText, setNotificationText] = useState("");
  const { addTaskToDatabase, getTasksFromDatabase } = DashboardPageModel();
  const {
    formLabel,
    fields,
    tasks,
    fieldElements,
    setTasks,
    setFieldElements,
  } = useTaskCreation();

  const toggleNotification = () => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  useEffect(() => {
    getTasksFromDatabase()
      .then((retrievedTasks) => {
        setTasks(retrievedTasks);
        setNotificationText("Successfully retrieved items!");
      })
      .catch((err) => {
        setNotificationText(err.toString());
      });

    toggleNotification();
  }, [getTasksFromDatabase, setTasks]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {};
    fieldElements.fields.forEach((field) => {
      Object.assign(newTask, { [field.fieldId]: field.fieldValue });
    });

    addTaskToDatabase(newTask)
      .then(() => {
        setTasks([...tasks, newTask]);
        setNotificationText("Successfully added the item!");
      })
      .catch((err) => {
        setNotificationText(err.toString());
      });

    toggleNotification();

    setFieldElements(TaskFormFields);
  };

  const handleChange = (id, event) => {
    const newElements = { ...fieldElements };
    const fieldIndexToUpdate = newElements.fields.findIndex(
      (field) => id === field.fieldId
    );

    newElements.fields[fieldIndexToUpdate].fieldValue = event.target.value;
    setFieldElements(newElements);
  };

  return {
    formLabel,
    fields,
    tasks,
    showNotification,
    notificationText,
    handleSubmit,
    handleChange,
  };
}
