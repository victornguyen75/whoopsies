import React from "react";
import PropTypes from "prop-types";
import Notification from "../UI/Notification";

export default function InDevelopmentPage({ viewModel }) {
  return (
    <>
      <h1>
        Whoopsies! Looks like you made an oopsy whoopsy! This page does not
        exist yet. Sorry about that! 😅
      </h1>
      <Notification
        show={viewModel.showNotification}
        text={viewModel.notificationText}
      />
    </>
  );
}

InDevelopmentPage.propTypes = {
  viewModel: PropTypes.shape({
    showNotification: PropTypes.bool,
    notificationText: PropTypes.string,
  }),
};

InDevelopmentPage.defaultProps = {
  viewModel: {
    showNotification: false,
    notificationText: "",
  },
};
