import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function TaskCreation() {
  return (
    <form>
      <div>
        <TextField
          label="Name"
          variant="filled"
          size="small"
          style={{ marginRight: "1em" }}
        />
        <TextField
          label="Priority"
          variant="filled"
          size="small"
          style={{ marginRight: "1em" }}
        />
        <TextField
          label="Release"
          variant="filled"
          size="small"
          style={{ marginRight: "1em" }}
        />
        <Button variant="contained" color="primary" type="button" size="large">
          Create
        </Button>
      </div>
    </form>
  );
}
