import React from "react";
import Grid from "@material-ui/core/Grid";
import TaskCreation from "../../UI/TaskCreation";
import List from "../../UI/List";

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

  return (
    <>
      <TaskCreation />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
        spacing={7}
      >
        <Grid key="0" item>
          <List header={TO_DO_HEADER} tasks={tasks} />
        </Grid>
        <Grid key="1" item>
          <List header={IN_ANALYSIS_HEADER} />
        </Grid>
        <Grid key="2" item>
          <List header={IN_DEVELOPMENT_HEADER} />
        </Grid>
        <Grid key="3" item>
          <List header={IN_TESTING_HEADER} />
        </Grid>
        <Grid key="4" item>
          <List header={DONE_HEADER} />
        </Grid>
      </Grid>
    </>
  );
}
