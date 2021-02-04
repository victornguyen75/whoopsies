import { useState } from "react";

export default function useNotifications() {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationText, setNotificationText] = useState("");

  const toggleNotification = (message) => {
    setNotificationText(message);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return {
    showNotification,
    notificationText,
    toggleNotification,
  };
}
