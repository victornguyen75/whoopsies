import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import TaskCreation from "../UI/TaskCreation";
import TaskList from "../UI/TaskList";

export default function DashboardPageView({
  viewModel,
  name,
  setName,
  priority,
  setPriority,
  release,
  setRelease,
  tasks,
  addTask,
}) {
  const gridStyles = { margin: "0px" };

  return (
    <>
      <TaskCreation
        name={name}
        setName={setName}
        priority={priority}
        setPriority={setPriority}
        release={release}
        setRelease={setRelease}
        addTask={addTask}
      />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
        spacing={5}
        style={gridStyles}
      >
        <Grid key="0" item>
          <TaskList header={viewModel.TO_DO_HEADER} tasks={tasks} />
        </Grid>
        <Grid key="1" item>
          <TaskList header={viewModel.IN_ANALYSIS_HEADER} />
        </Grid>
        <Grid key="2" item>
          <TaskList header={viewModel.IN_DEVELOPMENT_HEADER} />
        </Grid>
        <Grid key="3" item>
          <TaskList header={viewModel.IN_TESTING_HEADER} />
        </Grid>
        <Grid key="4" item>
          <TaskList header={viewModel.DONE_HEADER} />
        </Grid>
      </Grid>
    </>
  );
}

DashboardPageView.propTypes = {
  viewModel: PropTypes.objectOf(PropTypes.string),
  name: PropTypes.string,
  setName: PropTypes.func,
  priority: PropTypes.string,
  setPriority: PropTypes.func,
  release: PropTypes.string,
  setRelease: PropTypes.func,
  tasks: PropTypes.arrayOf(PropTypes.object),
  addTask: PropTypes.func,
};

DashboardPageView.defaultProps = {
  viewModel: {},
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
};
