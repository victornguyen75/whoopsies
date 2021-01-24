import React, { useState } from "react";
import DashboardPageView from "../Views/DashboardPageView";

export default function DashboardPageController() {
  const viewModel = {
    TO_DO_HEADER: "TO DO",
    IN_ANALYSIS_HEADER: "IN ANALYSIS",
    IN_DEVELOPMENT_HEADER: "IN DEVELOPMENT",
    IN_TESTING_HEADER: "IN TESTING",
    DONE_HEADER: "DONE",
  };

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
      viewModel={viewModel}
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
