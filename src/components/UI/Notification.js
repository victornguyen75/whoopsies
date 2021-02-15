import React from "react";
import PropTypes from "prop-types";
import NotificationStyles from "./NotificationStyles";

export default function Notification({ text, show }) {
  const { Alert } = NotificationStyles();
  const severity = text.includes("Success") ? "success" : "error";

  return (
    <Alert show={show ? "true" : undefined} severity={severity}>
      {text}
    </Alert>
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
