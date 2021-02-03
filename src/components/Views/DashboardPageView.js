import React from "react";
import PropTypes from "prop-types";
import TaskCreation from "../UI/TaskCreation";
import TaskList from "../UI/TaskList";
import FormContext from "../Providers/FormContext";
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
      <h2>{viewModel.formLabel}</h2>
      <FormContext.Provider value={viewModel.handleChange}>
        <TaskCreation
          fields={viewModel.fields}
          handleSubmit={viewModel.handleSubmit}
        />
      </FormContext.Provider>
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
    formLabel: PropTypes.string,
    fields: PropTypes.arrayOf(PropTypes.object),
    tasks: PropTypes.arrayOf(PropTypes.object),
    showNotification: PropTypes.bool,
    notificationText: PropTypes.string,
    handleSubmit: PropTypes.func,
    handleChange: PropTypes.func,
  }),
};

DashboardPageView.defaultProps = {
  viewModel: {
    formLabel: "",
    fields: [],
    tasks: [],
    showNotification: false,
    notificationText: "",
    handleSubmit: () => {},
    handleChange: () => {},
  },
};
