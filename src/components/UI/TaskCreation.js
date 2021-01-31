import React, { useContext } from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormContext from "../Providers/FormContext";

export default function TaskCreation({ fields, handleSubmit }) {
  const textStyles = { marginRight: "1em" };
  const handleChange = useContext(FormContext);
  const displayFields = fields.map((field) => (
    <TextField
      key={field.fieldId}
      label={field.fieldLabel}
      variant="filled"
      size="small"
      value={field.fieldValue}
      style={textStyles}
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
