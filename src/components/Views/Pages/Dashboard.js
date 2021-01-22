import React from "react";
import TaskCreation from "../../UI/TaskCreation";
import TaskCard from "../../UI/TaskCard";

const task = {
  id: 1 + Math.random(),
  name: "dummy task 1",
  priority: Math.floor(1 + Math.random()),
  release: "12/12/2021",
};

export default function Dashboard() {
  return (
    <>
      <TaskCreation />
      <TaskCard
        id={task.id}
        name={task.name}
        priority={task.priority}
        release={task.release}
      />
      <TaskCard />
    </>
  );
}
