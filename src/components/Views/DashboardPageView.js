import React from "react";
import PropTypes from "prop-types";
import TaskList from "../UI/TaskList";
import Notification from "../UI/Notification";
import DashboardPageViewStyles from "./DashboardPageViewStyles";

export default function DashboardPageView({ viewModel }) {
  const { Grid } = DashboardPageViewStyles();
  const HEADERS = [
    "TO DO",
    "IN ANALYSIS",
    "IN DEVELOPMENT",
    "IN TESTING",
    "DONE",
  ];

  return (
    <>
      <Notification
        show={viewModel.showNotification}
        text={viewModel.notificationText}
      />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
        spacing={5}
      >
        {HEADERS.map((header) => (
          <Grid key={header} item>
            {" "}
            <TaskList header={header} tasks={viewModel.tasks} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

DashboardPageView.propTypes = {
  viewModel: PropTypes.shape({
    tasks: PropTypes.arrayOf(PropTypes.object),
    showNotification: PropTypes.bool,
    notificationText: PropTypes.string,
  }),
};

DashboardPageView.defaultProps = {
  viewModel: {
    tasks: [],
    showNotification: false,
    notificationText: "",
  },
};
