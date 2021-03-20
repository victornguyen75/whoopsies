import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import TaskList from "../UI/TaskList";
import WhoopsiesHeader from "../UI/WhoopsiesHeader";
import TaskModal from "../UI/TaskModal";

export default function DashboardPageView({
  viewModel,
  toggleNotification,
  tasks,
  handleDelete,
}) {
  const STATUSES = [
    "TO DO",
    "IN ANALYSIS",
    "IN DEVELOPMENT",
    "IN TESTING",
    "DONE",
  ];

  useEffect(() => {
    toggleNotification("Success: retrieved the tasks!");
  }, [toggleNotification]);

  return (
    <div data-testid="dashboard-page-view">
      <WhoopsiesHeader />
      <TaskModal
        open={viewModel.openModal}
        toggleModal={viewModel.toggleModal}
        fields={viewModel.fieldElements}
        values={viewModel.taskValues}
        handleEdit={viewModel.saveTaskToLocalStorage}
        handleDelete={handleDelete}
      />
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="flex-start"
        spacing={2}
      >
        {STATUSES.map((status) => {
          const tasksOrganizedByStatus = tasks.filter(
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
    fieldElements: PropTypes.arrayOf(PropTypes.object),
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
    saveTaskToLocalStorage: PropTypes.func,
  }),
  tasks: PropTypes.arrayOf(PropTypes.object),
  toggleNotification: PropTypes.func,
  handleDelete: PropTypes.func,
};

DashboardPageView.defaultProps = {
  viewModel: {
    fieldElements: [],
    openModal: false,
    taskValues: {},
    toggleModal: () => {},
    saveTaskToLocalStorage: () => {},
  },
  tasks: [],
  toggleNotification: () => {},
  handleDelete: () => {},
};
