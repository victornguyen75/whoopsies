import { useState } from "react";

const CLICK_EVENT = "click";

export default function useModal() {
  const [openModal, setOpenModal] = useState(false);
  const [taskValues, setTaskValues] = useState({});

  const toggleModal = (task) => {
    setTaskValues(task.type === CLICK_EVENT ? {} : task);
    setOpenModal(!openModal);
  };

  return {
    openModal,
    taskValues,
    toggleModal,
  };
}
