import useTaskCreation from "../CustomHooks/useTaskCreation";

export default function TaskCreationPageViewModel() {
  const { formLabel, fieldElements, setFieldElements } = useTaskCreation();

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
    handleChange,
  };
}
