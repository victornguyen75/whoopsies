import TaskModel from "../Models/TaskModel";
import TaskFormFields from "./TaskFormFields";
import useTaskCreation from "./CustomHooks/useTaskCreation";
import useNotifications from "./CustomHooks/useNotifications";

export default function TaskCreationPageViewModel() {
  const { addTaskToDatabase } = TaskModel();
  const {
    formLabel,
    fields,
    tasks,
    fieldElements,
    setTasks,
    setFieldElements,
  } = useTaskCreation();

  const {
    showNotification,
    notificationText,
    toggleNotification,
  } = useNotifications();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {};
    fieldElements.fields.forEach((field) => {
      Object.assign(newTask, { [field.fieldId]: field.fieldValue });
    });

    addTaskToDatabase(newTask)
      .then(() => {
        setTasks([...tasks, newTask]);
        toggleNotification("Successfully added the item!");
      })
      .catch((err) => {
        toggleNotification(err.toString());
      });

    setFieldElements(TaskFormFields);
  };

  const handleChange = (id, event) => {
    const newElements = { ...fieldElements };
    const fieldIndexToUpdate = newElements.fields.findIndex(
      (field) => id === field.fieldId
    );

    newElements.fields[fieldIndexToUpdate].fieldValue = event.target.value;
    setFieldElements(newElements);
  };

  return {
    formLabel,
    fields,
    showNotification,
    notificationText,
    handleSubmit,
    handleChange,
  };
}
