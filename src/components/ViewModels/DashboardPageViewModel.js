import TaskFormFields from "./TaskFormFields";
import useTaskCreation from "./useTaskCreation";

export default function DashboardPageViewModel() {
  const {
    formLabel,
    fields,
    tasks,
    fieldElements,
    setTasks,
    setFieldElements,
    addTaskToDatabase,
  } = useTaskCreation();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {};
    fieldElements.fields.forEach((field) => {
      Object.assign(newTask, { [field.fieldId]: field.fieldValue });
    });

    addTaskToDatabase(newTask).then(() => setTasks([...tasks, newTask]));
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
    tasks,
    handleSubmit,
    handleChange,
  };
}
