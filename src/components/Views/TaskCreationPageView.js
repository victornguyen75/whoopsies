import React from "react";
import PropTypes from "prop-types";
import TaskCreation from "../UI/TaskCreation";
import FormContext from "../Providers/FormContext";
import Notification from "../UI/Notification";

export default function TaskCreationpageView({ viewModel }) {
  return (
    <>
      <h2>{viewModel.formLabel}</h2>
      <Notification
        show={viewModel.showNotification}
        text={viewModel.notificationText}
      />
      <FormContext.Provider value={viewModel.handleChange}>
        <TaskCreation
          fields={viewModel.fields}
          handleSubmit={viewModel.handleSubmit}
        />
      </FormContext.Provider>
    </>
  );
}

TaskCreationpageView.propTypes = {
  viewModel: PropTypes.shape({
    formLabel: PropTypes.string,
    fields: PropTypes.arrayOf(PropTypes.object),
    showNotification: PropTypes.bool,
    notificationText: PropTypes.string,
    handleSubmit: PropTypes.func,
    handleChange: PropTypes.func,
  }),
};

TaskCreationpageView.defaultProps = {
  viewModel: {
    formLabel: "",
    fields: [],
    showNotification: false,
    notificationText: "",
    handleSubmit: () => {},
    handleChange: () => {},
  },
};
