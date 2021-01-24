import "./App.css";
import WhoopsiesHeader from "./components/UI/WhoopsiesHeader";
import DashboardPageViewModel from "./components/ViewModels/DashboardPageViewModel";
import DashboardPageView from "./components/Views/DashboardPageView";

function App() {
  return (
    <>
      <WhoopsiesHeader />
      <DashboardPageView viewModel={DashboardPageViewModel()} />
    </>
  );
}

export default App;
