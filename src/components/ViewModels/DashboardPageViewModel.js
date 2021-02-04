import { useEffect } from "react";
import DashboardPageModel from "../Models/DashboardPageModel";
import useTaskCreation from "./useTaskCreation";
import useNotifications from "./useNotifications";

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
    // Excluding toggleNotification from the dependency list
    // since it causes an infinite loop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getTasksFromDatabase, setTasks]);

  return {
    tasks,
    showNotification,
    notificationText,
  };
}
