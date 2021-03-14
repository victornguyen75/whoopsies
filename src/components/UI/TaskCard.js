import React from "react";
import PropTypes from "prop-types";
import TaskCardStyles from "./TaskCardStyles";

export default function TaskCard({ priority, children, topMarginAdjust }) {
  const { Card } = TaskCardStyles();

  return (
    <Card priority={priority} adjust={topMarginAdjust.toString()}>
      {children}
    </Card>
  );
}

TaskCard.propTypes = {
  priority: PropTypes.string,
  topMarginAdjust: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.element),
};

TaskCard.defaultProps = {
  priority: "Cosmetic",
  topMarginAdjust: false,
  children: [],
};
