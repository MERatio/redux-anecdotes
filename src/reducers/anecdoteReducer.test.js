import anecdoteReducer from './anecdoteReducer';
import deepFreeze from 'deep-freeze';

describe('anecdote reducer', () => {
	test('should update an anecdote', () => {
		const state = [
			{ content: 'If it hurts, do it more often', id: 1, votes: 0 },
		];
		const anecdote = state[0];
		deepFreeze(state);
		deepFreeze(anecdote);

		const newAnecdoteObj = {
			content: 'updated anecdote',
			id: anecdote.id,
			votes: anecdote.votes + 1,
		};

		const action = {
			type: 'UPDATE_ANECDOTE',
			id: anecdote.id,
			data: newAnecdoteObj,
		};

		const newState = anecdoteReducer(state, action);
		const newAnecdote = newState.find((el) => el.id === action.id);
		expect(newAnecdote).toBe(newAnecdoteObj);
	});

	test('should create a new anecdote', () => {
		const state = [
			{ content: 'If it hurts, do it more often', id: 1, votes: 0 },
		];
		const anecdote = state[0];
		deepFreeze(state);
		deepFreeze(anecdote);

		const data = { content: 'test', id: state.length + 1, votes: 0 };
		const action = {
			type: 'NEW_ANECDOTE',
			data,
		};

		const newState = anecdoteReducer(state, action);
		expect(newState).toEqual([...state, data]);
	});
});
