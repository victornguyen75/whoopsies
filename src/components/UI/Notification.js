import React from "react";
import Card from "@material-ui/core/Card";
import PropTypes from "prop-types";

export default function Notification({ text, show }) {
  const styles = {
    backgroundColor: "#444",
    color: "white",
    padding: "16px",
    position: "absolute",
    top: `${show ? "1em" : "-10em"}`,
    right: "1em",
    zIndex: "999",
    transition: "top 1s ease",
    width: "15em",
  };
  return (
    <Card type="button" style={styles}>
      {text}
    </Card>
  );
}

Notification.propTypes = {
  text: PropTypes.string,
  show: PropTypes.bool,
};

Notification.defaultProps = {
  text: "",
  show: false,
};
