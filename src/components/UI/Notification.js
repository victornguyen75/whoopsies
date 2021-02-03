import React from "react";
import Card from "@material-ui/core/Card";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ErrorIcon from "@material-ui/icons/Error";
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
  const iconStyles = {
    verticalAlign: "top",
  };

  const displayIcon = text.includes("Success") ? (
    <NotificationsIcon style={iconStyles} />
  ) : (
    <ErrorIcon style={iconStyles} />
  );

  return (
    <Card style={styles}>
      {displayIcon}
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
