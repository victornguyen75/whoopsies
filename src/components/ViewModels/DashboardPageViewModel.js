import { useState } from "react";
import TaskFormFields from "./TaskFormFields";
import addTaskToDatabase from "../Models/DashboardPageModel";

export default function useTaskCreation() {
  const [fieldElements, setFieldElements] = useState(TaskFormFields);
  const [tasks, setTasks] = useState([]);
  const { formLabel, fields } = fieldElements;

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {};
    fieldElements.fields.forEach((field) => {
      Object.assign(newTask, { [field.fieldId]: field.fieldValue });
    });

    setTasks([...tasks, newTask]);
    addTaskToDatabase(newTask);
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
    handleSubmit,
    handleChange,
  };
}
