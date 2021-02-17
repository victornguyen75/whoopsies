import React from "react";
import PropTypes from "prop-types";
import TaskForm from "../UI/TaskForm";
import Notification from "../UI/Notification";
import WhoopsiesHeader from "../UI/WhoopsiesHeader";

export default function TaskCreationPageView({ viewModel }) {
  return (
    <div data-testid="task-creation-page-view">
      <WhoopsiesHeader />
      <h2>{viewModel.formLabel}</h2>
      <Notification
        show={viewModel.showNotification}
        text={viewModel.notificationText}
      />
      <TaskForm
        fields={viewModel.fieldElements}
        handleChange={viewModel.handleChange}
      />
    </div>
  );
}

TaskCreationPageView.propTypes = {
  viewModel: PropTypes.shape({
    formLabel: PropTypes.string,
    fieldElements: PropTypes.arrayOf(PropTypes.object),
    showNotification: PropTypes.bool,
    notificationText: PropTypes.string,
    handleSubmit: PropTypes.func,
    handleChange: PropTypes.func,
  }),
};

TaskCreationPageView.defaultProps = {
  viewModel: {
    formLabel: "",
    fieldElements: [],
    showNotification: false,
    notificationText: "",
    handleSubmit: () => {},
    handleChange: () => {},
  },
};
