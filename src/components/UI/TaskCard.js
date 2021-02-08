import React from "react";
import PropTypes from "prop-types";
import TaskCardStyles from "./TaskCardStyles";

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

export default function TaskCard({ name }) {
  const { Card } = TaskCardStyles();
  return (
    <Card variant="outlined">
      {"Name: "}
      {getBriefName(name)}
    </Card>
  );
}

TaskCard.propTypes = {
  name: PropTypes.string,
};

TaskCard.defaultProps = {
  name: "TBD",
};
