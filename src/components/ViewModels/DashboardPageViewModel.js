import { useEffect } from "react";
import TaskModel from "../Models/TaskModel";
import useTaskCreation from "./CustomHooks/useTaskCreation";
import useNotifications from "./CustomHooks/useNotifications";

function prioritize(item1, item2) {
  const priorities = ["Cosmetic", "Low", "Medium", "High", "Showstopper"];
  return priorities.indexOf(item1.priority) > priorities.indexOf(item2.priority)
    ? -1
    : 1;
}

export default function DashboardPageViewModel(rerender) {
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
        const prioritizedTasks = [...retrievedTasks].sort(prioritize);

        setTasks(prioritizedTasks);
        toggleNotification("Success: retrieved the tasks!");
      })
      .catch((err) => {
        toggleNotification(err.toString());
      });
  }, [rerender, getTasksFromDatabase, setTasks, toggleNotification]);

  return {
    tasks,
    showNotification,
    notificationText,
  };
}
