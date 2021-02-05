import { HashRouter, Route, Redirect } from "react-router-dom";
import TaskCreationPageView from "./components/Views/TaskCreationPageView";
import TaskCreationPageViewModel from "./components/ViewModels/TaskCreationPageViewModel";
import DashboardPageView from "./components/Views/DashboardPageView";
import DashboardPageViewModel from "./components/ViewModels/DashboardPageViewModel";

function App() {
  return (
    <HashRouter basename="/">
      <Route path="/create-task">
        <TaskCreationPageView viewModel={TaskCreationPageViewModel()} />
      </Route>
      <Route path="/dashboard">
        <DashboardPageView viewModel={DashboardPageViewModel()} />
      </Route>
      <Redirect from="/whoopsies/" to="/create-task" />
    </HashRouter>
  );
}

export default App;
