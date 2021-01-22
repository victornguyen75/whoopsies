import React from "react";
import PropTypes from "prop-types";
import TaskCard from "./TaskCard";

export default function List({ header, tasks }) {
  return (
    <>
      <h2>{header}</h2>
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
  tasks: PropTypes.objectOf(PropTypes.object),
};

List.defaultProps = {
  header: "TITLE NEEDED",
  tasks: [
    {
      id: undefined,
      name: undefined,
      priority: undefined,
      release: undefined,
    },
  ],
};
