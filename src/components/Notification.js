import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetNotification } from '../reducers/notificationReducer';

const Notification = () => {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.notification);

  useEffect(() => {
    if (notification) {
      setTimeout(() => dispatch(resetNotification()), 5000);
    }
  }, [notification]);

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  };
  return notification === '' ? null : <div style={style}>{notification}</div>;
};

export default Notification;
