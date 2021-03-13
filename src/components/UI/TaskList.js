import React from "react";
import PropTypes from "prop-types";
// import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
// import ExpandMore from "@material-ui/icons/ExpandMore";
import VisibilityIcon from "@material-ui/icons/Visibility";
import TaskCard from "./TaskCard";
import TaskListStyles from "./TaskListStyles";

function getBriefName(taskName) {
  const maxWords = 5;
  const arrayOfWords = taskName.split(" ");
  let words = 0;
  let i = 0;

  // Removes consecutive whitespace characters
  for (; i < arrayOfWords.length && words < maxWords; i += 1) {
    if (arrayOfWords[i].length) words += 1;
  }

  return arrayOfWords.splice(0, i).join(" ");
}

export default function TaskList({ header, tasks, toggleModal }) {
  const { List } = TaskListStyles();
  const fullHeader = `${header} (${tasks.length})`;

  const showCollapseFeature = () => {
    return tasks.length > 5 ? (
      <ExpandLess onClick={() => console.log("hey")} />
    ) : null;
  };

  return (
    <List>
      <b>{fullHeader}</b>
      {showCollapseFeature()}
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          priority={task.priority}
          toggleModal={toggleModal}
        >
          <span>{getBriefName(task.name)}</span>
          <VisibilityIcon onClick={() => toggleModal(task)} />
        </TaskCard>
      ))}
    </List>
  );
}

TaskList.propTypes = {
  header: PropTypes.string,
  tasks: PropTypes.arrayOf(PropTypes.object),
  toggleModal: PropTypes.func,
};

TaskList.defaultProps = {
  header: "TITLE NEEDED",
  tasks: [],
  toggleModal: () => {},
};
