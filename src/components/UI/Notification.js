import React from "react";
import PropTypes from "prop-types";
import NotificationStyles from "./NotificationStyles";

export default function Notification({ text, show }) {
  const { NotificationCard, BellIcon, ErrorIcon } = NotificationStyles();
  const displayIcon = text.includes("Success") ? <BellIcon /> : <ErrorIcon />;

  return (
    <NotificationCard show={show ? "true" : undefined}>
      {displayIcon}
      {text}
    </NotificationCard>
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
