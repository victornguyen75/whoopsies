import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TaskViewModel from "./components/ViewModels/TaskViewModel";
import DashboardPageView from "./components/Views/DashboardPageView";
import DashboardPageViewModel from "./components/ViewModels/DashboardPageViewModel";
import TaskFormPageView from "./components/Views/TaskFormPageView";
import TaskFormPageViewModel from "./components/ViewModels/TaskFormPageViewModel";
import InDevelopmentPageView from "./components/Views/InDevelopmentPageView";
import useNotifications from "./components/CustomHooks/useNotifications";
import useTaskCreation from "./components/CustomHooks/useTaskCreation";
import FormContext from "./components/Providers/FormContext";
import ThemeContext from "./components/Providers/ThemeContext";
import NavBar from "./components/UI/NavBar";
import Sidebar from "./components/UI/Sidebar";
import Notification from "./components/UI/Notification";
import AppStyles from "./AppStyles";

function App() {
  const { theme, Content } = AppStyles();

  const {
    showNotification,
    notificationText,
    toggleNotification,
  } = useNotifications();

  const {
    formLabel1,
    formLabel2,
    resetFieldElements,
    fieldElements,
    tasks,
    setFieldElements,
    setTasks,
  } = useTaskCreation();

  const {
    render,
    projectOptions,
    addTask,
    getTask,
    deleteTask,
    editTask,
    resetTaskForm,
    switchProjects,
  } = TaskViewModel(
    resetFieldElements,
    setFieldElements,
    setTasks,
    toggleNotification
  );

  useEffect(() => {
    getTask();
  }, [render, getTask]);

  return (
    <Router basename="/" data-testid="app">
      <ThemeContext.Provider value={theme}>
        <NavBar projectOptions={projectOptions} handleSearch={switchProjects} />
        <Sidebar resetTaskForm={resetTaskForm} />
        <Content>
          <Notification show={showNotification} text={notificationText} />
          <Switch>
            <Route path="/whoopsies/dashboard">
              <DashboardPageView
                viewModel={DashboardPageViewModel()}
                toggleNotification={toggleNotification}
                tasks={tasks}
                handleDelete={deleteTask}
              />
            </Route>
            <Route path="/whoopsies/create-task">
              <FormContext.Provider value={addTask}>
                <TaskFormPageView
                  formLabel={formLabel1}
                  viewModel={TaskFormPageViewModel(
                    fieldElements,
                    setFieldElements
                  )}
                />
              </FormContext.Provider>
            </Route>
            <Route path="/whoopsies/edit-task">
              <FormContext.Provider value={editTask}>
                <TaskFormPageView
                  formLabel={formLabel2}
                  viewModel={TaskFormPageViewModel(
                    fieldElements,
                    setFieldElements
                  )}
                />
              </FormContext.Provider>
            </Route>
            <Route path="*">
              <InDevelopmentPageView toggleNotification={toggleNotification} />
            </Route>
          </Switch>
        </Content>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
