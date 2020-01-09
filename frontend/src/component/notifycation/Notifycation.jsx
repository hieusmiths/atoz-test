import React from 'react';
import { notification, Button } from 'antd';
import PropTypes from 'prop-types';

const { createContext, useContext } = React;
const NotifyContext = createContext(null);
const registerNotify = () => {
  const key = `open${Date.now()}`;
  const btn = (
    <Button type="primary" size="small">
      Close
    </Button>
  );
  notification.open({
    message: 'Notification Title',
    description:
      'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
    btn,
    key,
  });
};
const NotifyProvider = (props) => {
  const value = { registerNotify };
  return <NotifyProvider.Provider value={value}>{props.children}</NotifyProvider.Provider>;
};
NotifyProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export const useNotify = () => useContext(NotifyContext);
