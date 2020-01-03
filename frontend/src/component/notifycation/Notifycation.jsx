import React from "react";
import { notification, Button } from "antd";
const { createContext, useContext } = React;
const NotifyContext = createContext(null);

const NotifyProvider = props => {
  const value = { registerNotify };

  return (
    <NotifyProvider.Provider value={value}>
      {props.children}
    </NotifyProvider.Provider>
  );
};

const registerNotify = () => {
  const key = `open${Date.now()}`;
  const btn = (
    <Button type="primary" size="small">
      Close
    </Button>
  );
  notification.open({
    message: "Notification Title",
    description:
      'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
    btn,
    key
  });
};

export const useNotify = () => {
  return useContext(NotifyContext);
};
