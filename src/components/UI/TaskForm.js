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
            key={field.fieldId}
            label={field.fieldLabel}
            value={field.fieldValue}
            select
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
      case "button":
        return (
          <Button
            key={field.fieldId}
            variant="contained"
            color="primary"
            type="submit"
            size="large"
          >
            {field.fieldLabel}
          </Button>
        );
      case "checkbox":
        return (
          <FormControlLabel
            key={field.fieldId}
            label={field.fieldLabel}
            control={
              // eslint-disable-next-line react/jsx-wrap-multilines
              <Checkbox
                checked={field.fieldValue}
                onChange={(event) => handleChange(field.fieldId, event)}
                color="primary"
              />
            }
          />
        );
      default:
        return null;
    }
  });

  return <form onSubmit={(e) => handleSubmit(e)}>{displayFields}</form>;
}

TaskForm.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.object),
  handleSubmit: PropTypes.func,
};

TaskForm.defaultProps = {
  fields: [],
  handleSubmit: () => {},
};
