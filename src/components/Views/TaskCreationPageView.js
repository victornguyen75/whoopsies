import React from "react";
import PropTypes from "prop-types";
import FormContext from "../Providers/FormContext";
import CreateTask from "../UI/CreateTask";
import Notification from "../UI/Notification";
import WhoopsiesHeader from "../UI/WhoopsiesHeader";

export default function TaskCreationPageView({ viewModel }) {
  return (
    <>
      <WhoopsiesHeader />
      <h2>{viewModel.formLabel}</h2>
      <Notification
        show={viewModel.showNotification}
        text={viewModel.notificationText}
      />
      <FormContext.Provider value={viewModel.handleChange}>
        <CreateTask
          fields={viewModel.fields}
          handleSubmit={viewModel.handleSubmit}
        />
      </FormContext.Provider>
    </>
  );
}

TaskCreationPageView.propTypes = {
  viewModel: PropTypes.shape({
    formLabel: PropTypes.string,
    fields: PropTypes.arrayOf(PropTypes.object),
    showNotification: PropTypes.bool,
    notificationText: PropTypes.string,
    handleSubmit: PropTypes.func,
    handleChange: PropTypes.func,
  }),
};

TaskCreationPageView.defaultProps = {
  viewModel: {
    formLabel: "",
    fields: [],
    showNotification: false,
    notificationText: "",
    handleSubmit: () => {},
    handleChange: () => {},
  },
};
