import TaskModel from "../Models/TaskModel";
import useTaskCreation from "./CustomHooks/useTaskCreation";
import useNotifications from "./CustomHooks/useNotifications";

export default function TaskCreationPageViewModel() {
  const { getLatestTaskId, addTaskToDatabase } = TaskModel();
  const { formLabel, fieldElements, setFieldElements } = useTaskCreation();
  const {
    showNotification,
    notificationText,
    toggleNotification,
  } = useNotifications();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {};

    fieldElements.forEach((field) => {
      Object.assign(newTask, { [field.fieldId]: field.fieldValue });
    });

    getLatestTaskId()
      .then((id) => addTaskToDatabase(id, newTask))
      .then(() => {
        toggleNotification("Successfully added the item!");
      })
      .catch((err) => {
        toggleNotification(err.toString());
      });
  };

  const handleChange = (id, event) => {
    const newElements = [...fieldElements];
    const fieldIndexToUpdate = newElements.findIndex(
      (field) => id === field.fieldId
    );

    if (id === "reset") {
      newElements[fieldIndexToUpdate].fieldValue = event.target.checked;
    } else {
      newElements[fieldIndexToUpdate].fieldValue = event.target.value;
    }
    setFieldElements(newElements);
  };

  return {
    formLabel,
    fieldElements,
    showNotification,
    notificationText,
    handleSubmit,
    handleChange,
  };
}
