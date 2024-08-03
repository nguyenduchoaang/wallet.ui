import React, { createContext, useState, useContext } from "react";
import styled, { keyframes, css } from "styled-components";
import { NOTIFY } from "./Constant";
import { Notify } from "./ConfigSVG";

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  const [idCounter, setIdCounter] = useState(0);

  const showNotification = (message, type = "info", duration = 3000) => {
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
            <Notify.Info width="30" height="30" fill="white" />
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

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideOutLeft = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(100%);
  }
`;

const NotifyWrapper = styled.div`
  position: fixed;
  top: 4px;
  right: 6px;
  z-index: 1000;
`;

const NotifyMessage = styled.div`
  background-color: ${({ type }) => {
    switch (type) {
      case NOTIFY.SUCCESS:
        return "#68B984";
      case NOTIFY.WARNING:
        return "orange";
      case NOTIFY.ERROR:
        return "red";
      case NOTIFY.INFO:
        return "#FED049";
      default:
        return "blue";
    }
  }};
  position: relative;
  color: white;
  width: 80dvw;
  max-width: 360px;
  height: 60px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  justify-content: center;
  border-radius: 4px;
  animation: ${({ removing }) =>
    removing
      ? css`
          ${slideOutLeft} 0.5s ease-out
        `
      : css`
          ${slideInRight} 0.5s ease-out
        `};
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
  cursor: pointer;
  .close_icon {
    position: absolute;
    right: 5px;
    top: 0px;
    cursor: pointer;
  }
  span {
    font-weight: 500;
  }
`;
