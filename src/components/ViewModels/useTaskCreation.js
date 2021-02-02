import { useState } from "react";
import TaskFormFields from "./TaskFormFields";

export default function useTaskCreation() {
  const [fieldElements, setFieldElements] = useState(TaskFormFields);
  const [tasks, setTasks] = useState([]);
  const { formLabel, fields } = fieldElements;

  return {
    formLabel,
    fields,
    tasks,
    fieldElements,
    setTasks,
    setFieldElements,
  };
}
