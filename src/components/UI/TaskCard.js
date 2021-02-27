import React from "react";
import PropTypes from "prop-types";
import TaskCardStyles from "./TaskCardStyles";

export default function TaskCard({ priority, children }) {
  const { Card } = TaskCardStyles();

  return <Card priority={priority}>{children}</Card>;
}

TaskCard.propTypes = {
  priority: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element),
};

TaskCard.defaultProps = {
  priority: "Cosmetic",
  children: [],
};
