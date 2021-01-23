import React from "react";
import PropTypes from "prop-types";
import TaskCard from "./TaskCard";

export default function List({ header, tasks }) {
  const fullHeader = `${header} (${tasks.length})`;

  return (
    <>
      <h2>{fullHeader}</h2>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          name={task.name}
          priority={task.priority}
          release={task.release}
        />
      ))}
    </>
  );
}

List.propTypes = {
  header: PropTypes.string,
  tasks: PropTypes.arrayOf(PropTypes.object),
};

List.defaultProps = {
  header: "TITLE NEEDED",
  tasks: [
    {
      id: 1 + Math.random(),
      name: undefined,
      priority: undefined,
      release: undefined,
    },
  ],
};
