import React, { useContext } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import FormContext from "../Providers/FormContext";
import TaskCreationStyles from "./TaskCreationStyles";

export default function TaskCreation({ fields, handleSubmit }) {
  const { TextField } = TaskCreationStyles();
  const handleChange = useContext(FormContext);
  const displayFields = fields.map((field) => (
    <TextField
      key={field.fieldId}
      label={field.fieldLabel}
      variant="filled"
      size="small"
      value={field.fieldValue}
      onChange={(event) => handleChange(field.fieldId, event)}
    />
  ));

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      {displayFields}
      <Button variant="contained" color="primary" type="submit" size="large">
        Create
      </Button>
    </form>
  );
}

TaskCreation.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.object),
  handleSubmit: PropTypes.func,
};

TaskCreation.defaultProps = {
  fields: [],
  handleSubmit: () => {},
};
