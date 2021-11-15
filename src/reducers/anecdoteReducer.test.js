import getId from '../lib/getId';
import anecdoteReducer, { initialState } from './anecdoteReducer';
import deepFreeze from 'deep-freeze';

describe('anecdote reducer', () => {
	test('should increment vote of an anecdote', () => {
		const state = initialState;
		const anecdote = state[0];
		deepFreeze(state);
		deepFreeze(anecdote);

		const action = {
			type: 'VOTE',
			data: { id: anecdote.id },
		};

		const newState = anecdoteReducer(state, action);
		const newAnecdote = newState.find((el) => el.id === action.data.id);
		expect(newAnecdote.votes).toBe(anecdote.votes + 1);
		expect(newState).toEqual(
			state.map((el) =>
				el.id !== action.data.id
					? el
					: { ...anecdote, votes: anecdote.votes + 1 }
			)
		);
	});

	test('should create a new anecdote', () => {
		const state = initialState;
		const anecdote = state[0];
		deepFreeze(state);
		deepFreeze(anecdote);

		const data = { content: 'test', id: getId(), votes: 0 };
		const action = {
			type: 'NEW_ANECDOTE',
			data,
		};

		const newState = anecdoteReducer(state, action);
		expect(newState).toEqual([...state, data]);
	});
});