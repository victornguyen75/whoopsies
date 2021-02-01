import { useState, useEffect } from "react";
import TaskFormFields from "./TaskFormFields";
import DashboardPageModel from "../Models/DashboardPageModel";

export default function useTaskCreation() {
  const [fieldElements, setFieldElements] = useState(TaskFormFields);
  const [tasks, setTasks] = useState([]);
  const { addTaskToDatabase, getTasksFromDatabase } = DashboardPageModel();
  const { formLabel, fields } = fieldElements;
  useEffect(() => {
    getTasksFromDatabase().then((retrievedTasks) => {
      setTasks(retrievedTasks);
    });
  }, [getTasksFromDatabase]);

  return {
    formLabel,
    fields,
    tasks,
    fieldElements,
    setTasks,
    setFieldElements,
    addTaskToDatabase,
  };
}
