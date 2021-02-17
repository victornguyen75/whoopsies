import { useState } from "react";
import TaskFormFields from "../TaskFormFields";

export default function useTaskCreation() {
  const { formLabel } = TaskFormFields();
  const [fieldElements, setFieldElements] = useState(TaskFormFields().fields);
  const [tasks, setTasks] = useState([]);

  return {
    formLabel,
    fieldElements,
    tasks,
    setFieldElements,
    setTasks,
  };
}
