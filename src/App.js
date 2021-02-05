import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TaskCreationPageView from "./components/Views/TaskCreationPageView";
import TaskCreationPageViewModel from "./components/ViewModels/TaskCreationPageViewModel";
import DashboardPageView from "./components/Views/DashboardPageView";
import DashboardPageViewModel from "./components/ViewModels/DashboardPageViewModel";

function App() {
  return (
    <Router basename="/">
      <ul>
        <li>
          <Link to="/whoopsies/create-task">Create Task</Link>
        </li>
        <li>
          <Link to="/whoopsies/dashboard">Dashboard</Link>
        </li>
      </ul>
      <Route path="/whoopsies/create-task">
        <TaskCreationPageView viewModel={TaskCreationPageViewModel()} />
      </Route>
      <Route path="/whoopsies/dashboard">
        <DashboardPageView viewModel={DashboardPageViewModel()} />
      </Route>
    </Router>
  );
}

export default App;
