import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashboardPageView from "./components/Views/DashboardPageView";
import DashboardPageViewModel from "./components/ViewModels/DashboardPageViewModel";
import TaskCreationPageView from "./components/Views/TaskCreationPageView";
import TaskCreationPageViewModel from "./components/ViewModels/TaskCreationPageViewModel";
import InDevelopmentPageView from "./components/Views/InDevelopmentPageView";
import InDevelopmentPageViewModel from "./components/ViewModels/InDevelopmentPageViewModel";
import FormContext from "./components/Providers/FormContext";
import Sidebar from "./components/UI/Sidebar";
import AppStyles from "./AppStyles";

function App() {
  const { NavBar, SearchBox, SearchIcon, InputBase, Content } = AppStyles();

  // The value of render does not matter;
  // I just want the effect hook to rerender the tasks in the Dashboard page
  const [render, setRender] = useState(true);

  const dashboardPageViewModel = DashboardPageViewModel(render);
  const taskCreationPageViewModel = TaskCreationPageViewModel();
  const inDevelopmentPageViewModel = InDevelopmentPageViewModel();

  const newTaskSubmission = (e) => {
    taskCreationPageViewModel.handleSubmit(e).then(() => setRender(!render));
  };

  return (
    <Router basename="/">
      <Sidebar />
      <NavBar>
        Whoopsies! An Issue Tracker for all your Oopsies!
        <SearchBox>
          <SearchIcon />
          <InputBase
            placeholder="Search by project"
            inputProps={{ "aria-label": "search" }}
          />
        </SearchBox>
      </NavBar>
      <Content>
        <Switch>
          <Route path="/whoopsies/dashboard">
            <DashboardPageView viewModel={dashboardPageViewModel} />
          </Route>
          <Route path="/whoopsies/create-task">
            <FormContext.Provider value={newTaskSubmission}>
              <TaskCreationPageView viewModel={taskCreationPageViewModel} />
            </FormContext.Provider>
          </Route>
          <Route path="*">
            <InDevelopmentPageView viewModel={inDevelopmentPageViewModel} />
          </Route>
        </Switch>
      </Content>
    </Router>
  );
}

export default App;
