import "./App.css";
import WhoopsiesHeader from "./components/UI/WhoopsiesHeader";
import TaskCreationPageView from "./components/Views/TaskCreationPageView";
import TaskCreationPageViewModel from "./components/ViewModels/TaskCreationPageViewModel";
import DashboardPageView from "./components/Views/DashboardPageView";
import DashboardPageViewModel from "./components/ViewModels/DashboardPageViewModel";

function App() {
  return (
    <>
      <WhoopsiesHeader />
      <TaskCreationPageView viewModel={TaskCreationPageViewModel()} />
      <DashboardPageView viewModel={DashboardPageViewModel()} />
    </>
  );
}

export default App;
