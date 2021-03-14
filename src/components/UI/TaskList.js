import React, { useState } from "react";
import PropTypes from "prop-types";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
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
  const [open, setOpen] = useState(true);
  const fullHeader = `${header} (${tasks.length})`;

  return (
    <List>
      <b>{fullHeader}</b>
      {/* Regular list rendering */}
      {tasks.length <= 5 ? (
        tasks.map((task) => (
          <TaskCard
            key={task.id}
            priority={task.priority}
            toggleModal={toggleModal}
          >
            <span>{getBriefName(task.name)}</span>
            <VisibilityIcon onClick={() => toggleModal(task)} />
          </TaskCard>
        ))
      ) : (
        <>
          {open ? (
            <ExpandLess onClick={() => setOpen(!open)} />
          ) : (
            <ExpandMore onClick={() => setOpen(!open)} />
          )}
          {/* Collapsible list rendering for tasks[0] to tasks[4] */}
          {tasks.slice(0, 5).map((task, index) => {
            if (index > 5) {
              return null;
            }
            return (
              <TaskCard
                key={task.id}
                priority={task.priority}
                toggleModal={toggleModal}
              >
                <span>{getBriefName(task.name)}</span>
                <VisibilityIcon onClick={() => toggleModal(task)} />
              </TaskCard>
            );
          })}
          <Collapse id="collapse" in={open} timeout="auto" unmountOnExit>
            {/* Collapsible list rendering for tasks[5] to the end */}
            {tasks.slice(5).map((task, index) => (
              <TaskCard
                key={task.id}
                priority={task.priority}
                toggleModal={toggleModal}
                topMarginAdjust={index === 0}
              >
                <span>{getBriefName(task.name)}</span>
                <VisibilityIcon onClick={() => toggleModal(task)} />
              </TaskCard>
            ))}
          </Collapse>
        </>
      )}
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
