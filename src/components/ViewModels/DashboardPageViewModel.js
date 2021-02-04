import { useEffect } from "react";
import TaskModel from "../Models/TaskModel";
import useTaskCreation from "./CustomHooks/useTaskCreation";
import useNotifications from "./CustomHooks/useNotifications";

export default function DashboardPageViewModel() {
  const { getTasksFromDatabase } = TaskModel();
  const { tasks, setTasks } = useTaskCreation();
  const {
    showNotification,
    notificationText,
    toggleNotification,
  } = useNotifications();

  useEffect(() => {
    getTasksFromDatabase()
      .then((retrievedTasks) => {
        setTasks(retrievedTasks);
        toggleNotification("Successfully retrieved items!");
      })
      .catch((err) => {
        toggleNotification(err.toString());
      });
  }, [getTasksFromDatabase, setTasks, toggleNotification]);

  return {
    tasks,
    showNotification,
    notificationText,
  };
}
