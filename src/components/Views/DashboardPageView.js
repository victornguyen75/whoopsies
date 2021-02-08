import React from "react";
import PropTypes from "prop-types";
import TaskList from "../UI/TaskList";
import Notification from "../UI/Notification";
import WhoopsiesHeader from "../UI/WhoopsiesHeader";
import DashboardPageViewStyles from "./DashboardPageViewStyles";

export default function DashboardPageView({ viewModel }) {
  const { Grid } = DashboardPageViewStyles();
  const STATUSES = [
    "TO DO",
    "IN ANALYSIS",
    "IN DEVELOPMENT",
    "IN TESTING",
    "DONE",
  ];

  const displayLists = STATUSES.map((status) => {
    const tasksOrganizedByStatus = viewModel.tasks.filter(
      (task) => status === task.status
    );
    return (
      <Grid key={status} item>
        <TaskList header={status} tasks={tasksOrganizedByStatus} />
      </Grid>
    );
  });
  return (
    <>
      <WhoopsiesHeader />
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
        {displayLists}
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
