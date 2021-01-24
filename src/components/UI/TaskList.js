import React from "react";
import PropTypes from "prop-types";
import TaskCard from "./TaskCard";

export default function TaskList({ header, tasks }) {
  const fullHeader = `${header} (${tasks.length})`;
  const listStyles = {
    borderRadius: "4px",
    backgroundColor: "lightgray",
    padding: "1px 5px 1px 5px",
  };

  return (
    <div style={listStyles}>
      <b>{fullHeader}</b>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          name={task.name}
          priority={task.priority}
          release={task.release}
        />
      ))}
    </div>
  );
}

TaskList.propTypes = {
  header: PropTypes.string,
  tasks: PropTypes.arrayOf(PropTypes.object),
};

TaskList.defaultProps = {
  header: "TITLE NEEDED",
  tasks: [
    {
      id: 1 + Math.random(),
      name: "TBD",
      priority: "",
      release: "TBD",
    },
  ],
};
