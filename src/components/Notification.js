import { useDispatch, useSelector } from 'react-redux';
import { resetNotification } from '../reducers/notificationReducer';

const Notification = () => {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.notification);

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  };
  return notification === '' ? null : <div style={style}>{notification}</div>;
};

export default Notification;
