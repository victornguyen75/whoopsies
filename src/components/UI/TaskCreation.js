import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function TaskCreation() {
  const textStyles = { marginRight: "1em" };

  return (
    <form>
      <div>
        <TextField
          label="Name"
          variant="filled"
          size="small"
          style={textStyles}
        />
        <TextField
          label="Priority"
          variant="filled"
          size="small"
          style={textStyles}
        />
        <TextField
          label="Release"
          variant="filled"
          size="small"
          style={textStyles}
        />
        <Button variant="contained" color="primary" type="button" size="large">
          Create
        </Button>
      </div>
    </form>
  );
}
