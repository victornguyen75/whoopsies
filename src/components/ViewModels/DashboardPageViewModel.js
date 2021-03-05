import useTaskCreation from "../CustomHooks/useTaskCreation";
import useModal from "../CustomHooks/useModal";

export default function DashboardPageViewModel() {
  const { fieldElements } = useTaskCreation();
  const { openModal, taskValues, toggleModal } = useModal();

  return {
    fieldElements,
    openModal,
    taskValues,
    toggleModal,
  };
}
