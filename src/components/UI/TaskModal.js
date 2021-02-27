import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import TaskModalStyles from "./TaskModalStyles";

const displayFields = (field, values) => {
  if (["text", "text-long", "select"].includes(field.fieldType) && values.id) {
    return (
      <p key={field.fieldId}>
        {`${field.fieldLabel}: ${values[`${field.fieldId}`]}`}
      </p>
    );
  }
  return null;
};

export default function TaskModal(props) {
  const { open, toggleModal, fields, values } = props;
  const { Modal, ModalButtons } = TaskModalStyles();
  return (
    <Modal
      open={open}
      onClose={toggleModal}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div id="modal-container">
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          spacing={2}
        >
          <Grid item xs={11}>
            <h2 id="modal-title">{values.name}</h2>
          </Grid>
          <Grid item xs={1}>
            <Link to="/whoopsies/edit-task" id="edit">
              <EditIcon />
            </Link>
            <DeleteIcon id="delete" />
          </Grid>
        </Grid>

        {fields.map((field) => displayFields(field, values))}

        <ModalButtons>
          <Button
            variant="contained"
            color="primary"
            type="button"
            size="large"
            onClick={toggleModal}
          >
            Close
          </Button>
        </ModalButtons>
      </div>
    </Modal>
  );
}

TaskModal.propTypes = {
  open: PropTypes.bool,
  fields: PropTypes.arrayOf(PropTypes.object),
  values: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    status: PropTypes.string,
    priority: PropTypes.string,
    sprint: PropTypes.string,
    version: PropTypes.string,
    release: PropTypes.string,
  }),
  toggleModal: PropTypes.func,
};

TaskModal.defaultProps = {
  open: false,
  fields: [],
  values: {},
  toggleModal: () => {},
};
