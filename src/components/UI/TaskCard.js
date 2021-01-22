import React from "react";
import PropTypes from "prop-types";

export default function TaskCard({ name, priority, release }) {
  return (
    <div>
      {"Name: "}
      {name}
      <br />
      {"Priority: "}
      {priority}
      <br />
      {"Release Date: "}
      {release}
    </div>
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
