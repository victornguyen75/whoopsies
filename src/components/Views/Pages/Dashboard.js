import React from "react";
import Grid from "@material-ui/core/Grid";
import TaskCreation from "../../UI/TaskCreation";
import TaskList from "../../UI/TaskList";

const tasks = [
  {
    id: 1 + Math.random(),
    name: "dummy task 1",
    priority: Math.floor(100 * Math.random()),
    release: "12/12/2021",
  },
  {
    id: 1 + Math.random(),
    name: "dummy task 1",
    priority: Math.floor(100 * Math.random()),
    release: "12/12/2021",
  },
  {
    id: 1 + Math.random(),
    name: "dummy task 1",
    priority: Math.floor(100 * Math.random()),
    release: "12/12/2021",
  },
];

export default function Dashboard() {
  const TO_DO_HEADER = "TO DO";
  const IN_ANALYSIS_HEADER = "IN ANALYSIS";
  const IN_DEVELOPMENT_HEADER = "IN DEVELOPMENT";
  const IN_TESTING_HEADER = "IN TESTING";
  const DONE_HEADER = "DONE";
  const gridStyles = { margin: "0px" };

  return (
    <>
      <TaskCreation />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
        spacing={5}
        style={gridStyles}
      >
        <Grid key="0" item>
          <TaskList header={TO_DO_HEADER} tasks={tasks} />
        </Grid>
        <Grid key="1" item>
          <TaskList header={IN_ANALYSIS_HEADER} />
        </Grid>
        <Grid key="2" item>
          <TaskList header={IN_DEVELOPMENT_HEADER} />
        </Grid>
        <Grid key="3" item>
          <TaskList header={IN_TESTING_HEADER} />
        </Grid>
        <Grid key="4" item>
          <TaskList header={DONE_HEADER} />
        </Grid>
      </Grid>
    </>
  );
}
