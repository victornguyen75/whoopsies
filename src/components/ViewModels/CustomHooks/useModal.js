import { useState } from "react";

export default function useModal() {
  const [openModal, setOpenModal] = useState(false);
  const [modalFields, setModalFields] = useState({});

  const toggleModal = (task) => {
    setModalFields(task);
    setOpenModal(!openModal);
  };

  return {
    openModal,
    modalFields,
    toggleModal,
  };
}
