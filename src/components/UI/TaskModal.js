import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import TaskModalStyles from "./TaskModalStyles";

export default function TaskModal(props) {
  const { open, toggleModal, modalFields } = props;
  const { Modal } = TaskModalStyles();
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
            <h2 id="modal-title">{modalFields.name}</h2>
          </Grid>
          <Grid item xs={1}>
            <Link to="/whoopsies/edit-task" id="edit">
              <EditIcon />
            </Link>
            <DeleteIcon id="delete" />
          </Grid>
        </Grid>

        <p id="modal-description">{modalFields.description}</p>
        <p>
          {`Status: `}
          {modalFields.status}
        </p>
        <p>
          {`Priority: `}
          {modalFields.priority}
        </p>
        <p>
          {`Sprint: `}
          {modalFields.sprint}
        </p>
        <p>
          {`Version: `}
          {modalFields.version}
        </p>
        <p>
          {`Release: `}
          {modalFields.release}
        </p>
        <div className="modal-buttons">
          <Button
            variant="contained"
            color="primary"
            type="button"
            size="large"
            onClick={toggleModal}
          >
            Close
          </Button>
        </div>
      </div>
    </Modal>
  );
}

TaskModal.propTypes = {
  open: PropTypes.bool,
  modalFields: PropTypes.shape({
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
  modalFields: {},
  toggleModal: () => {},
};
