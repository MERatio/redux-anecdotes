import filterReducer from './filterReducer';

describe('filter reducer', () => {
  test('should set the value of filter property of the state', () => {
    const state = '';
    const filter = 'test filter';

    const action = {
      type: 'SET_FILTER',
      filter,
    };

    const newState = filterReducer(state, action);
    expect(newState).toBe(filter);
  });
});
