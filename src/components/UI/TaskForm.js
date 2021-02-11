import React, { useContext } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import FormContext from "../Providers/FormContext";
import TaskFormStyles from "./TaskFormStyles";

export default function TaskForm({ fields, handleSubmit }) {
  const { TextField } = TaskFormStyles();
  const handleChange = useContext(FormContext);
  const displayFields = fields.map((field) => {
    switch (field.fieldType) {
      case "text":
        return (
          <TextField
            key={field.fieldId}
            label={field.fieldLabel}
            variant="filled"
            size="small"
            value={field.fieldValue}
            onChange={(event) => handleChange(field.fieldId, event)}
          />
        );
      case "select":
        return (
          <TextField
            select
            key={field.fieldId}
            label={field.fieldLabel}
            variant="filled"
            size="small"
            value={field.fieldValue}
            onChange={(event) => handleChange(field.fieldId, event)}
          >
            {field.fieldOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        );
      default:
        return null;
    }
  });

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      {displayFields}
      <Button variant="contained" color="primary" type="submit" size="large">
        Create
      </Button>
    </form>
  );
}

TaskForm.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.object),
  handleSubmit: PropTypes.func,
};

TaskForm.defaultProps = {
  fields: [],
  handleSubmit: () => {},
};