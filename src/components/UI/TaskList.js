import React from "react";
import PropTypes from "prop-types";
import TaskCard from "./TaskCard";
import TaskListStyles from "./TaskListStyles";

export default function TaskList({ header, tasks }) {
  const { List } = TaskListStyles();
  const fullHeader = `${header} (${tasks.length})`;

  return (
    <List>
      <b>{fullHeader}</b>
      {tasks.map((task) => (
        <TaskCard key={task.id} name={task.name} priority={task.priority} />
      ))}
    </List>
  );
}

TaskList.propTypes = {
  header: PropTypes.string,
  tasks: PropTypes.arrayOf(PropTypes.object),
};

TaskList.defaultProps = {
  header: "TITLE NEEDED",
  tasks: [],
};
