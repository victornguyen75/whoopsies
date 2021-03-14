export default function TaskFormPageViewModel(fieldElements, setFieldElements) {
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

  const hydrateTaskFromLocalStorage = () => {
    const hydratedTask = [...fieldElements];
    const storedTask = JSON.parse(localStorage.getItem("task"));

    hydratedTask.forEach((field, index) => {
      Object.assign(hydratedTask[index], {
        fieldValue: storedTask[field.fieldId],
      });
    });

    localStorage.clear();
    setFieldElements(hydratedTask);
  };

  return {
    fieldElements,
    handleChange,
    hydrateTaskFromLocalStorage,
  };
}
