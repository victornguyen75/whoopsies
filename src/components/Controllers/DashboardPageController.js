import React from "react";
import PropTypes from "prop-types";
import DashboardPageView from "../Views/DashboardPageView";

export default function DashboardPageController({ viewModel }) {
  return (
    <DashboardPageView
      name={viewModel.name}
      setName={viewModel.setName}
      priority={viewModel.priority}
      setPriority={viewModel.setPriority}
      release={viewModel.release}
      setRelease={viewModel.setRelease}
      tasks={viewModel.tasks}
      addTask={viewModel.addTask}
    />
  );
}

DashboardPageController.propTypes = {
  viewModel: PropTypes.shape({
    name: PropTypes.string,
    setName: PropTypes.func,
    priority: PropTypes.string,
    setPriority: PropTypes.func,
    release: PropTypes.string,
    setRelease: PropTypes.func,
    tasks: PropTypes.arrayOf(PropTypes.object),
    addTask: PropTypes.func,
  }),
};

DashboardPageController.defaultProps = {
  viewModel: {
    name: "TBD",
    setName: () => {},
    priority: "",
    setPriority: () => {},
    release: "TBD",
    setRelease: () => {},
    tasks: [
      {
        id: 1 + Math.random(),
        name: "TBD",
        priority: "",
        release: "TBD",
      },
    ],
    addTask: () => {},
  },
};
