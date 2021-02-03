import React from "react";
import PropTypes from "prop-types";
import TaskCardStyles from "./TaskCardStyles";

export default function TaskCard({ name, priority, release }) {
  const { Card } = TaskCardStyles();

  return (
    <Card variant="outlined">
      {"Name: "}
      {name}
      <br />
      {"Priority: "}
      {priority}
      <br />
      {"Release Date: "}
      {release}
    </Card>
  );
}

TaskCard.propTypes = {
  name: PropTypes.string,
  priority: PropTypes.string,
  release: PropTypes.string,
};

TaskCard.defaultProps = {
  name: "TBD",
  priority: "",
  release: "TBD",
};
