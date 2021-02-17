import TaskModel from "../Models/TaskModel";
import useTaskCreation from "./CustomHooks/useTaskCreation";
import useNotifications from "./CustomHooks/useNotifications";

export default function TaskCreationPageViewModel() {
  const { getLatestTaskId, addTaskToDatabase } = TaskModel();
  const {
    formLabel,
    resetFieldElements,
    fieldElements,
    setFieldElements,
  } = useTaskCreation();
  const {
    showNotification,
    notificationText,
    toggleNotification,
  } = useNotifications();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTask = {};
    const willReset = fieldElements[fieldElements.length - 1].fieldValue;

    fieldElements.forEach((field) => {
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
    }
    return Promise.resolve();
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
