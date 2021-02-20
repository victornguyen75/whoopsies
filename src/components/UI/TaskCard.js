import React, { useContext } from "react";
import PropTypes from "prop-types";
import ThemeContext from "../Providers/ThemeContext";
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

export default function TaskCard({ name, priority }) {
  const { Card } = TaskCardStyles();
  const theme = useContext(ThemeContext);

  return (
    <Card priority={priority} colors={theme.PRIORITY_COLORS}>
      {getBriefName(name)}
    </Card>
  );
}

TaskCard.propTypes = {
  name: PropTypes.string,
  priority: PropTypes.string,
};

TaskCard.defaultProps = {
  name: "TBD",
  priority: "Cosmetic",
};
