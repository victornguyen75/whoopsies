import { useState } from "react";
import TaskFormFields from "../FormFields/TaskFormFields";

export default function useTaskCreation() {
  const { formLabel } = TaskFormFields();
  const [fieldElements, setFieldElements] = useState(TaskFormFields().fields);
  const [tasks, setTasks] = useState([]);

  return {
    formLabel,
    resetFieldElements: TaskFormFields().fields,
    fieldElements,
    tasks,
    setFieldElements,
    setTasks,
  };
}
