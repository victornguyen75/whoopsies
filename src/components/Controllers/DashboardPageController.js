import React, { useState } from "react";
import DashboardPageView from "../Views/DashboardPageView";

export default function DashboardPageController() {
  const [name, setName] = useState("");
  const [priority, setPriority] = useState("");
  const [release, setRelease] = useState("");
  const [tasks, setTasks] = useState([
    {
      id: 1 + Math.random(),
      name: "dummy task 1",
      priority: Math.floor(100 * Math.random()).toString(),
      release: "12/12/2021",
    },
  ]);

  const addTask = (e) => {
    e.preventDefault();

    const newList = [...tasks];

    newList.push({
      id: 1 + Math.random(),
      name,
      priority,
      release,
    });

    setTasks(newList);
    setName("");
    setPriority("");
    setRelease("");
  };

  return (
    <DashboardPageView
      name={name}
      setName={setName}
      priority={priority}
      setPriority={setPriority}
      release={release}
      setRelease={setRelease}
      tasks={tasks}
      addTask={addTask}
    />
  );
}
