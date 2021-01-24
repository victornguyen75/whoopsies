import "./App.css";
import WhoopsiesHeader from "./components/UI/WhoopsiesHeader";
import DashboardPageViewModel from "./components/ViewModels/DashboardPageViewModel";
import DashboardPageController from "./components/Controllers/DashboardPageController";

function App() {
  return (
    <>
      <WhoopsiesHeader />
      <DashboardPageController viewModel={DashboardPageViewModel()} />
    </>
  );
}

export default App;
