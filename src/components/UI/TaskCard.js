import React from "react";
import PropTypes from "prop-types";

export default function TaskCard({ id, name, priority, release }) {
  return (
    <div key={id}>
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
  id: PropTypes.number,
  name: PropTypes.string,
  priority: PropTypes.number,
  release: PropTypes.string,
};

TaskCard.defaultProps = {
  id: 1 + Math.random(),
  name: "TBD",
  priority: Math.floor(1 + Math.random()),
  release: "TBD",
};
