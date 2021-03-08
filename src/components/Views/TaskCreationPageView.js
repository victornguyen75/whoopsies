import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import TaskForm from "../UI/TaskForm";
import WhoopsiesHeader from "../UI/WhoopsiesHeader";

export default function TaskCreationPageView({ viewModel }) {
  const { pathname } = useLocation();

  useEffect(() => {
    const onCreateTaskPage = pathname.includes("create-task");
    if (!onCreateTaskPage && localStorage.length !== 0) {
      viewModel.hydrateTaskFromLocalStorage();
    }
  });

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
    hydrateTaskFromLocalStorage: PropTypes.func,
  }),
};

TaskCreationPageView.defaultProps = {
  viewModel: {
    formLabel: "",
    fieldElements: [],
    handleChange: () => {},
    hydrateTaskFromLocalStorage: () => {},
  },
};
