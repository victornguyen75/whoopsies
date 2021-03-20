import { useState, useCallback } from "react";
import TaskModel from "../Models/TaskModel";

function prioritize(item1, item2) {
  const priorities = ["Cosmetic", "Low", "Medium", "High", "Showstopper"];
  return priorities.indexOf(item1.priority) > priorities.indexOf(item2.priority)
    ? -1
    : 1;
}

export default function TaskViewModel(
  resetFieldElements,
  setFieldElements,
  setTasks,
  toggleNotification
) {
  const {
    getLatestTaskId,
    addTaskToDatabase,
    getTasksFromDatabase,
    updateTaskToDatabase,
    deleteTaskFromDatabase,
  } = TaskModel();

  // The value of render does not matter;
  // I just want the effect hook to rerender the tasks in the Dashboard page
  const [render, setRender] = useState(true);

  const resetTaskForm = () => {
    setFieldElements(resetFieldElements);
  };

  const addTask = async (e, fields) => {
    e.preventDefault();

    const newTask = {};
    const willReset = fields[fields.length - 1].fieldValue;

    fields.forEach((field) => {
      Object.assign(newTask, { [field.fieldId]: field.fieldValue });
    });

    try {
      const id = await getLatestTaskId();
      await addTaskToDatabase(id, newTask);
      toggleNotification("Success: added the item!");
      if (willReset) {
        resetTaskForm();
      }
    } catch (err) {
      toggleNotification(err.toString());
    } finally {
      setRender(!render);
    }
  };

  const getTask = useCallback(() => {
    const project = localStorage.getItem("project") || "Whoopsies!";

    getTasksFromDatabase(project)
      .then((retrievedTasks) => {
        const prioritizedTasks = [...retrievedTasks].sort(prioritize);

        setTasks(prioritizedTasks);
        localStorage.setItem("project", project);
      })
      .catch((err) => {
        toggleNotification(err.toString());
      });
  }, [getTasksFromDatabase, setTasks, toggleNotification]);

  const deleteTask = async (id, project) => {
    try {
      deleteTaskFromDatabase(id, project);
      toggleNotification("Success: deleted the item!");
    } catch (err) {
      toggleNotification(err.toString());
    } finally {
      setRender(!render);
    }
  };

  const editTask = async (e, fields) => {
    e.preventDefault();

    const updatedTask = {};
    fields.forEach((field) => {
      Object.assign(updatedTask, { [field.fieldId]: field.fieldValue });
    });

    try {
      updateTaskToDatabase(updatedTask);
      toggleNotification("Success: updated the item!");
    } catch (err) {
      toggleNotification(err.toString());
    } finally {
      setRender(!render);
    }
  };

  const switchProjects = (e) => {
    localStorage.setItem("project", e.target.innerText);
    window.location.reload();
  };

  // Will refactor into a service call later
  const projectOptions = ["Whoopsies!", "Victory Coin"];

  return {
    render,
    projectOptions,
    addTask,
    getTask,
    deleteTask,
    editTask,
    resetTaskForm,
    switchProjects,
  };
}
