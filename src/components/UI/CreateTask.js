import React, { useContext } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import FormContext from "../Providers/FormContext";
import CreateTaskStyles from "./CreateTaskStyles";

export default function CreateTask({ fields, handleSubmit }) {
  const { TextField } = CreateTaskStyles();
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

CreateTask.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.object),
  handleSubmit: PropTypes.func,
};

CreateTask.defaultProps = {
  fields: [],
  handleSubmit: () => {},
};
