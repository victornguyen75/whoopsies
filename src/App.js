import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import TaskCreationPageView from "./components/Views/TaskCreationPageView";
import TaskCreationPageViewModel from "./components/ViewModels/TaskCreationPageViewModel";
import DashboardPageView from "./components/Views/DashboardPageView";
import DashboardPageViewModel from "./components/ViewModels/DashboardPageViewModel";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/create-task">
            <TaskCreationPageView viewModel={TaskCreationPageViewModel()} />
          </Route>
          <Route path="/dashboard">
            <DashboardPageView viewModel={DashboardPageViewModel()} />
          </Route>
          <Redirect from="/whoopsies" to="/create-task" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
