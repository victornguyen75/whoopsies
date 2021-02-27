import { useState } from "react";

export default function useModal() {
  const [openModal, setOpenModal] = useState(false);
  const [taskValues, setTaskValues] = useState({});

  const toggleModal = (task) => {
    setTaskValues(task);
    setOpenModal(!openModal);
  };

  return {
    openModal,
    taskValues,
    toggleModal,
  };
}
