let notificationTimeout;

const reducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.message;
    case 'CLEAR_NOTIFICATION':
      return '';
    default:
      return state;
  }
};

const clearNotification = () => {
  return { type: 'CLEAR_NOTIFICATION' };
};

export const setNotification = (message, durationInSeconds) => {
  return async (dispatch) => {
    notificationTimeout && clearTimeout(notificationTimeout);
    dispatch({ type: 'SET_NOTIFICATION', message });
    notificationTimeout = setTimeout(() => {
      dispatch(clearNotification());
    }, durationInSeconds * 1000);
  };
};

export default reducer;
