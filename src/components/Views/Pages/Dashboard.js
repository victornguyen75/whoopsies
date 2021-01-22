import React from "react";
import TaskCreation from "../../UI/TaskCreation";
import List from "../../UI/List";

const tasks = [
  {
    id: 1 + Math.random(),
    name: "dummy task 1",
    priority: Math.floor(100 * Math.random()),
    release: "12/12/2021",
  },
  {
    id: 1 + Math.random(),
    name: "dummy task 1",
    priority: Math.floor(100 * Math.random()),
    release: "12/12/2021",
  },
  {
    id: 1 + Math.random(),
    name: "dummy task 1",
    priority: Math.floor(100 * Math.random()),
    release: "12/12/2021",
  },
];

export default function Dashboard() {
  const TO_DO_HEADER = "TO DO";
  const IN_ANALYSIS_HEADER = "IN ANALYSIS";
  const IN_DEVELOPMENT_HEADER = "IN DEVELOPMENT";
  const IN_TESTING_HEADER = "IN TESTING";
  const DONE_HEADER = "DONE";

  return (
    <>
      <TaskCreation />
      <List header={TO_DO_HEADER} tasks={tasks} />
      <List header={IN_ANALYSIS_HEADER} />
      <List header={IN_DEVELOPMENT_HEADER} />
      <List header={IN_TESTING_HEADER} />
      <List header={DONE_HEADER} />
    </>
  );
}
