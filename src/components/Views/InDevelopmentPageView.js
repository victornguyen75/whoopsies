import React, { useEffect } from "react";
import PropTypes from "prop-types";

export default function InDevelopmentPage({ toggleNotification }) {
  useEffect(() => {
    toggleNotification("Info: sorry this page does not exist... yet!");
  }, [toggleNotification]);

  return (
    <div data-testid="in-development-page-view">
      <h1>Whoopsies! Looks like you made an oopsy!</h1>
      <p> This page does not exist yet. Sorry about that! 😅</p>
    </div>
  );
}

InDevelopmentPage.propTypes = {
  toggleNotification: PropTypes.func,
};

InDevelopmentPage.defaultProps = {
  toggleNotification: () => {},
};
