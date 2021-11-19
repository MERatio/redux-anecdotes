import anecdoteService from '../services/anecdotes';

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
  return async (dispatch) => {
    const anecdote = await anecdoteService.update(id, data);
    dispatch({ type: 'UPDATE_ANECDOTE', id, data: anecdote });
  };
};

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const anecdote = await anecdoteService.create(content);
    dispatch({ type: 'NEW_ANECDOTE', data: anecdote });
  };
};

export const initAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch({
      type: 'INIT_ANECDOTE',
      data: anecdotes,
    });
  };
};

export default reducer;
