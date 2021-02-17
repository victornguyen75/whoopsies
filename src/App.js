import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DashboardPageView from "./components/Views/DashboardPageView";
import DashboardPageViewModel from "./components/ViewModels/DashboardPageViewModel";
import TaskCreationPageView from "./components/Views/TaskCreationPageView";
import TaskCreationPageViewModel from "./components/ViewModels/TaskCreationPageViewModel";
import FormContext from "./components/Providers/FormContext";
import Sidebar from "./components/UI/Sidebar";
import AppStyles from "./AppStyles";

function App() {
  const { Content } = AppStyles();

  // The value of render does not matter;
  // I just want the effect hook to rerender the tasks in the Dashboard page
  const [render, setRender] = useState(true);

  const dashboardPageViewModel = DashboardPageViewModel(render);
  const taskCreationPageViewModel = TaskCreationPageViewModel();

  const newTaskSubmission = (e) => {
    taskCreationPageViewModel.handleSubmit(e).then(() => setRender(!render));
  };

  return (
    <Router basename="/">
      <Sidebar />
      <Content>
        <Route path="/whoopsies/dashboard">
          <DashboardPageView viewModel={dashboardPageViewModel} />
        </Route>
        <Route path="/whoopsies/create-task">
          <FormContext.Provider value={newTaskSubmission}>
            <TaskCreationPageView viewModel={taskCreationPageViewModel} />
          </FormContext.Provider>
        </Route>
      </Content>
    </Router>
  );
}

export default App;
