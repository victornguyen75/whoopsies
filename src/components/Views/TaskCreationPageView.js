import React from "react";
import PropTypes from "prop-types";
import TaskForm from "../UI/TaskForm";
import WhoopsiesHeader from "../UI/WhoopsiesHeader";

export default function TaskCreationPageView({ viewModel }) {
  return (
    <div data-testid="task-creation-page-view">
      <WhoopsiesHeader />
      <h2>{viewModel.formLabel}</h2>
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
    handleChange: PropTypes.func,
  }),
};

TaskCreationPageView.defaultProps = {
  viewModel: {
    formLabel: "",
    fieldElements: [],
    handleChange: () => {},
  },
};
