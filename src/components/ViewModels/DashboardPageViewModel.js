import { useEffect } from "react";
import DashboardPageModel from "../Models/DashboardPageModel";
import useTaskCreation from "./CustomHooks/useTaskCreation";
import useNotifications from "./CustomHooks/useNotifications";

export default function DashboardPageViewModel() {
  const { getTasksFromDatabase } = DashboardPageModel();
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
