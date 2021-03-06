import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import TaskForm from "../UI/TaskForm";
import WhoopsiesHeader from "../UI/WhoopsiesHeader";

export default function TaskFormPageView({ formLabel, viewModel }) {
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
      <h2>{formLabel}</h2>
      <TaskForm
        fields={viewModel.fieldElements}
        handleChange={viewModel.handleChange}
      />
    </div>
  );
}

TaskFormPageView.propTypes = {
  formLabel: PropTypes.string,
  viewModel: PropTypes.shape({
    fieldElements: PropTypes.arrayOf(PropTypes.object),
    handleChange: PropTypes.func,
    hydrateTaskFromLocalStorage: PropTypes.func,
  }),
};

TaskFormPageView.defaultProps = {
  formLabel: "",
  viewModel: {
    fieldElements: [],
    handleChange: () => {},
    hydrateTaskFromLocalStorage: () => {},
  },
};
