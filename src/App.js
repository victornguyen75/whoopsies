import "./App.css";
import WhoopsiesHeader from "./components/UI/WhoopsiesHeader";
import useTaskCreation from "./components/ViewModels/DashboardPageViewModel";
import DashboardPageView from "./components/Views/DashboardPageView";

function App() {
  return (
    <>
      <WhoopsiesHeader />
      <DashboardPageView viewModel={useTaskCreation()} />
    </>
  );
}

export default App;
