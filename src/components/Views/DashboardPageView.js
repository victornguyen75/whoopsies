import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import TaskCreation from "../UI/TaskCreation";
import TaskList from "../UI/TaskList";

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
      <TaskCreation
        name={viewModel.name}
        setName={viewModel.setName}
        priority={viewModel.priority}
        setPriority={viewModel.setPriority}
        release={viewModel.release}
        setRelease={viewModel.setRelease}
        addTask={viewModel.addTask}
      />
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
    name: PropTypes.string,
    setName: PropTypes.func,
    priority: PropTypes.string,
    setPriority: PropTypes.func,
    release: PropTypes.string,
    setRelease: PropTypes.func,
    tasks: PropTypes.arrayOf(PropTypes.object),
    addTask: PropTypes.func,
  }),
};

DashboardPageView.defaultProps = {
  viewModel: {
    name: "TBD",
    setName: () => {},
    priority: "",
    setPriority: () => {},
    release: "TBD",
    setRelease: () => {},
    tasks: [
      {
        id: 1 + Math.random(),
        name: "TBD",
        priority: "",
        release: "TBD",
      },
    ],
    addTask: () => {},
  },
};
