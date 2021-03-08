import { useState } from "react";
import TaskFormFields from "../FormFields/TaskFormFields";

export default function useTaskCreation() {
  const { formLabel1, formLabel2 } = TaskFormFields();
  const [fieldElements, setFieldElements] = useState(TaskFormFields().fields);
  const [tasks, setTasks] = useState([]);

  return {
    formLabel1,
    formLabel2,
    resetFieldElements: TaskFormFields().fields,
    fieldElements,
    tasks,
    setFieldElements,
    setTasks,
  };
}
