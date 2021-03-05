import { useEffect } from "react";
import useNotifications from "../CustomHooks/useNotifications";

export default function InDevelopmentPageViewModel() {
  const {
    showNotification,
    notificationText,
    toggleNotification,
  } = useNotifications();

  useEffect(() => {
    toggleNotification("Info: sorry this page does not exist... yet!");
  }, [toggleNotification]);

  return { showNotification, notificationText };
}
