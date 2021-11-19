const reducer = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_ANECDOTE':
      return state.map((el) => (el.id !== action.id ? el : action.data));
    case 'NEW_ANECDOTE':
      return [...state, action.data];
    case 'INIT_ANECDOTE':
      return action.data;
    default:
      return state;
  }
};

export const updateAnecdote = (id, data) => {
  return { type: 'UPDATE_ANECDOTE', id, data };
};

export const createAnecdote = (anecdote) => {
  return {
    type: 'NEW_ANECDOTE',
    data: anecdote,
  };
};

export const initAnecdotes = (anecdotes) => {
  return {
    type: 'INIT_ANECDOTE',
    data: anecdotes,
  };
};

export default reducer;
