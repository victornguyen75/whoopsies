import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function TaskCreation({
  name,
  setName,
  priority,
  setPriority,
  release,
  setRelease,
  addTask,
}) {
  const textStyles = { marginRight: "1em" };

  return (
    <form onSubmit={addTask}>
      <TextField
        label="Name"
        variant="filled"
        size="small"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={textStyles}
      />
      <TextField
        label="Priority"
        variant="filled"
        size="small"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        style={textStyles}
      />
      <TextField
        label="Release"
        variant="filled"
        size="small"
        value={release}
        onChange={(e) => setRelease(e.target.value)}
        style={textStyles}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        size="large"
        disabled={!name}
      >
        Create
      </Button>
    </form>
  );
}

TaskCreation.propTypes = {
  name: PropTypes.string,
  setName: PropTypes.func,
  priority: PropTypes.string,
  setPriority: PropTypes.func,
  release: PropTypes.string,
  setRelease: PropTypes.func,
  addTask: PropTypes.func,
};

TaskCreation.defaultProps = {
  name: "TBD",
  setName: () => {},
  priority: "",
  setPriority: () => {},
  release: "TBD",
  setRelease: () => {},
  addTask: () => {},
};
