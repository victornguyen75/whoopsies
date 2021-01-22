import React from "react";
import TaskCreation from "../UI/TaskCreation";
import List from "../UI/List";

export default function Board() {
  return (
    <>
      <TaskCreation />
      <List />
      <List />
      <List />
    </>
  );
}
