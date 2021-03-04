import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TaskModel from "./components/Models/TaskModel";
import DashboardPageView from "./components/Views/DashboardPageView";
import DashboardPageViewModel from "./components/ViewModels/DashboardPageViewModel";
import TaskCreationPageView from "./components/Views/TaskCreationPageView";
import TaskCreationPageViewModel from "./components/ViewModels/TaskCreationPageViewModel";
import InDevelopmentPageView from "./components/Views/InDevelopmentPageView";
import InDevelopmentPageViewModel from "./components/ViewModels/InDevelopmentPageViewModel";
import useNotifications from "./components/ViewModels/CustomHooks/useNotifications";
import useTaskCreation from "./components/ViewModels/CustomHooks/useTaskCreation";
import FormContext from "./components/Providers/FormContext";
import ThemeContext from "./components/Providers/ThemeContext";
import NavBar from "./components/UI/NavBar";
import Sidebar from "./components/UI/Sidebar";
import Notification from "./components/UI/Notification";
import AppStyles from "./AppStyles";

function App() {
  const { theme, Content } = AppStyles();
  const {
    getLatestTaskId,
    addTaskToDatabase,
    deleteTaskFromDatebase,
  } = TaskModel();

  const {
    showNotification,
    notificationText,
    toggleNotification,
  } = useNotifications();

  const { resetFieldElements, setFieldElements } = useTaskCreation();

  // The value of render does not matter;
  // I just want the effect hook to rerender the tasks in the Dashboard page
  const [render, setRender] = useState(true);

  const addTask = async (e, fields) => {
    e.preventDefault();

    const newTask = {};
    const willReset = fields[fields.length - 1].fieldValue;

    fields.forEach((field) => {
      Object.assign(newTask, { [field.fieldId]: field.fieldValue });
    });

    try {
      const id = await getLatestTaskId();
      await addTaskToDatabase(id, newTask);
      toggleNotification("Success: added the item!");
      if (willReset) {
        setFieldElements(resetFieldElements);
      }
    } catch (err) {
      toggleNotification(err.toString());
    } finally {
      setRender(!render);
    }
  };

  const deleteTask = (id) => {
    deleteTaskFromDatebase(id).then(() => setRender(!render));
  };

  return (
    <Router basename="/" data-testid="app">
      <ThemeContext.Provider value={theme}>
        <NavBar />
        <Sidebar />
        <Content>
          <Notification show={showNotification} text={notificationText} />
          <Switch>
            <Route path="/whoopsies/dashboard">
              <DashboardPageView
                viewModel={DashboardPageViewModel(render)}
                deleteTask={deleteTask}
              />
            </Route>
            <Route path="/whoopsies/create-task">
              <FormContext.Provider value={addTask}>
                <TaskCreationPageView viewModel={TaskCreationPageViewModel()} />
              </FormContext.Provider>
            </Route>
            <Route path="*">
              <InDevelopmentPageView viewModel={InDevelopmentPageViewModel()} />
            </Route>
          </Switch>
        </Content>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
