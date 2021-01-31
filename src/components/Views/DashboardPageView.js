import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import TaskCreation from "../UI/TaskCreation";
import TaskList from "../UI/TaskList";
import FormContext from "../Providers/FormContext";

export default function DashboardPageView({ viewModel }) {
  const gridStyles = { margin: "0px" };
  const HEADERS = [
    "TO DO",
    "IN ANALYSIS",
    "IN DEVELOPMENT",
    "IN TESTING",
    "DONE",
  ];

  return (
    <>
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
        style={gridStyles}
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
    handleSubmit: PropTypes.func,
    handleChange: PropTypes.func,
  }),
};

DashboardPageView.defaultProps = {
  viewModel: {
    formLabel: "",
    fields: [],
    tasks: [],
    handleSubmit: () => {},
    handleChange: () => {},
  },
};
