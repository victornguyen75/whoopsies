import TaskModel from "../Models/TaskModel";
import TaskFormFields from "./TaskFormFields";
import useTaskCreation from "./CustomHooks/useTaskCreation";
import useNotifications from "./CustomHooks/useNotifications";

export default function TaskCreationPageViewModel() {
  const { getLatestTaskId, addTaskToDatabase } = TaskModel();
  const {
    formLabel,
    fields,
    fieldElements,
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
    const willReset = fields[fields.length - 1].fieldValue;

    fieldElements.fields.forEach((field) => {
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

    if (willReset) {
      setFieldElements(TaskFormFields);
    }
  };

  const handleChange = (id, event) => {
    const newElements = { ...fieldElements };
    const fieldIndexToUpdate = newElements.fields.findIndex(
      (field) => id === field.fieldId
    );

    if (id === "reset") {
      newElements.fields[fieldIndexToUpdate].fieldValue = event.target.checked;
    } else {
      newElements.fields[fieldIndexToUpdate].fieldValue = event.target.value;
    }
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
