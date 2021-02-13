import { BrowserRouter as Router, Route } from "react-router-dom";
import TaskCreationPageView from "./components/Views/TaskCreationPageView";
import TaskCreationPageViewModel from "./components/ViewModels/TaskCreationPageViewModel";
import DashboardPageView from "./components/Views/DashboardPageView";
import DashboardPageViewModel from "./components/ViewModels/DashboardPageViewModel";
import Sidebar from "./components/UI/Sidebar";
import AppStyles from "./AppStyles";

function App() {
  const { Content } = AppStyles();
  return (
    <Router basename="/">
      <Sidebar />
      <Content>
        <Route path="/whoopsies/create-task">
          <TaskCreationPageView viewModel={TaskCreationPageViewModel()} />
        </Route>
        <Route path="/whoopsies/dashboard">
          <DashboardPageView viewModel={DashboardPageViewModel()} />
        </Route>
      </Content>
    </Router>
  );
}

export default App;
