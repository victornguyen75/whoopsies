import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import TaskCreation from "../UI/TaskCreation";
import TaskList from "../UI/TaskList";

export default function DashboardPageView({
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
  const HEADERS = {
    TO_DO_HEADER: "TO DO",
    IN_ANALYSIS_HEADER: "IN ANALYSIS",
    IN_DEVELOPMENT_HEADER: "IN DEVELOPMENT",
    IN_TESTING_HEADER: "IN TESTING",
    DONE_HEADER: "DONE",
  };

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
          <TaskList header={HEADERS.TO_DO_HEADER} tasks={tasks} />
        </Grid>
        <Grid key="1" item>
          <TaskList header={HEADERS.IN_ANALYSIS_HEADER} />
        </Grid>
        <Grid key="2" item>
          <TaskList header={HEADERS.IN_DEVELOPMENT_HEADER} />
        </Grid>
        <Grid key="3" item>
          <TaskList header={HEADERS.IN_TESTING_HEADER} />
        </Grid>
        <Grid key="4" item>
          <TaskList header={HEADERS.DONE_HEADER} />
        </Grid>
      </Grid>
    </>
  );
}

DashboardPageView.propTypes = {
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
