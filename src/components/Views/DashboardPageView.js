import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import TaskList from "../UI/TaskList";
import Notification from "../UI/Notification";
import WhoopsiesHeader from "../UI/WhoopsiesHeader";
import TaskModal from "../UI/TaskModal";

export default function DashboardPageView({ viewModel, deleteTask }) {
  const STATUSES = [
    "TO DO",
    "IN ANALYSIS",
    "IN DEVELOPMENT",
    "IN TESTING",
    "DONE",
  ];

  return (
    <div data-testid="dashboard-page-view">
      <WhoopsiesHeader />
      <Notification
        show={viewModel.showNotification}
        text={viewModel.notificationText}
      />
      <TaskModal
        open={viewModel.openModal}
        toggleModal={viewModel.toggleModal}
        fields={viewModel.fieldElements}
        values={viewModel.taskValues}
        deleteTask={deleteTask}
      />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
        spacing={2}
      >
        {STATUSES.map((status) => {
          const tasksOrganizedByStatus = viewModel.tasks.filter(
            (task) => status === task.status
          );
          return (
            <Grid key={status} item>
              <TaskList
                header={status}
                tasks={tasksOrganizedByStatus}
                toggleModal={viewModel.toggleModal}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

DashboardPageView.propTypes = {
  viewModel: PropTypes.shape({
    tasks: PropTypes.arrayOf(PropTypes.object),
    fieldElements: PropTypes.arrayOf(PropTypes.object),
    showNotification: PropTypes.bool,
    notificationText: PropTypes.string,
    openModal: PropTypes.bool,
    taskValues: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
      status: PropTypes.string,
      priority: PropTypes.string,
      sprint: PropTypes.string,
      version: PropTypes.string,
      release: PropTypes.string,
    }),
    toggleModal: PropTypes.func,
  }),
  deleteTask: PropTypes.func,
};

DashboardPageView.defaultProps = {
  viewModel: {
    tasks: [],
    fieldElements: [],
    showNotification: false,
    notificationText: "",
    openModal: false,
    taskValues: {},
    toggleModal: () => {},
  },
  deleteTask: () => {},
};
