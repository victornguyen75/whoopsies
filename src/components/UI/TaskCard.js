import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";

export default function TaskCard({ name, priority, release }) {
  const cardStyles = { margin: "5px 0px" };

  return (
    <Card variant="outlined" style={cardStyles}>
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
  priority: PropTypes.number,
  release: PropTypes.string,
};

TaskCard.defaultProps = {
  name: "TBD",
  priority: Math.floor(1 + Math.random()),
  release: "TBD",
};
