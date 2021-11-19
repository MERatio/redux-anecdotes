const reducer = (state = [], action) => {
  switch (action.type) {
    case 'VOTE_ANECDOTE':
      const anecdote = state.find((el) => el.id === action.data.id);
      return state.map((el) =>
        el.id !== action.data.id
          ? el
          : { ...anecdote, votes: anecdote.votes + 1 }
      );
    case 'NEW_ANECDOTE':
      return [...state, action.data];
    case 'INIT_ANECDOTE':
      return action.data;
    default:
      return state;
  }
};

export const vote = (id) => {
  return { type: 'VOTE_ANECDOTE', data: { id } };
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
