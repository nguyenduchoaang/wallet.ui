/**
 * @abstract NotificationProvider
 * @author NguyenDucHoang
 * @param {object} {message, type, duration}
 *
 */
import React, { createContext, useState, useContext } from "react";
import { Notify } from "./ConfigSVG";
import { Common } from "./Common";
import { NotifyMessage, NotifyWrapper } from "./bs";
const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  const [idCounter, setIdCounter] = useState(0);

  const showNotification = (message, type = "info", duration = 2000) => {
    const id = idCounter;
    setIdCounter(idCounter + 1);

    const timerId = setTimeout(() => {
      removeNotification(id);
    }, duration);

    setNotifications((prev) => [...prev, { message, type, id, timerId }]);
  };

  const removeNotification = (id) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id
          ? { ...notification, removing: true }
          : notification
      )
    );
    const notification = notifications.find((n) => n.id === id);
    if (notification?.timerId) {
      clearTimeout(notification.timerId);
    }

    setTimeout(() => {
      setNotifications((prev) =>
        prev.filter((notification) => notification.id !== id)
      );
    }, 500);
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      <NotifyWrapper>
        {notifications.map(({ message, type, id, removing }) => (
          <NotifyMessage
            key={id}
            type={type}
            removing={removing}
            onClick={() => removeNotification(id)}
          >
            {Common.renderNotify(type)}
            <span>{message}</span>
            <div className="close_icon">
              <Notify.Close width="20" height="20" fill="white" />
            </div>
          </NotifyMessage>
        ))}
      </NotifyWrapper>
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error("Error notification");
  }
  return context.showNotification;
};
