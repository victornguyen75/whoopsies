import { useState, useCallback } from "react";

export default function useNotifications() {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationText, setNotificationText] = useState("");

  const toggleNotification = useCallback(
    (message) => {
      setNotificationText(message);
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    },
    [setShowNotification, setNotificationText]
  );

  return {
    showNotification,
    notificationText,
    toggleNotification,
  };
}
