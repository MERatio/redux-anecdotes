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
    dispatch({ type: 'SET_NOTIFICATION', message });
    setTimeout(() => {
      dispatch(clearNotification());
    }, durationInSeconds * 1000);
  };
};

export default reducer;
