import React, { useContext } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import MenuItem from "@material-ui/core/MenuItem";
import FormContext from "../Providers/FormContext";
import TaskFormStyles from "./TaskFormStyles";

export default function TaskForm({ fields, handleSubmit }) {
  const { TextField, FormControlLabel } = TaskFormStyles();

  const handleChange = useContext(FormContext);

  const checkboxField = fields[fields.length - 1];

  const displayFields = fields.map((field) => {
    switch (field.fieldType) {
      case "text":
        return (
          <TextField
            key={field.fieldId}
            label={field.fieldLabel}
            value={field.fieldValue}
            size="small"
            variant="outlined"
            onChange={(event) => handleChange(field.fieldId, event)}
          />
        );
      case "text-long":
        return (
          <TextField
            key={field.fieldId}
            label={field.fieldLabel}
            value={field.fieldValue}
            multiline
            fullWidth
            rows={5}
            size="small"
            variant="outlined"
            onChange={(event) => handleChange(field.fieldId, event)}
          />
        );
      case "select":
        return (
          <TextField
            select
            key={field.fieldId}
            label={field.fieldLabel}
            value={field.fieldValue}
            size="small"
            variant="outlined"
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
      <FormControlLabel
        control={
          // eslint-disable-next-line react/jsx-wrap-multilines
          <Checkbox
            checked={checkboxField.fieldValue}
            onChange={(event) => handleChange(checkboxField.fieldId, event)}
            color="primary"
          />
        }
        label={checkboxField.fieldLabel}
      />
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
