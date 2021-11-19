import anecdoteReducer from './anecdoteReducer';
import deepFreeze from 'deep-freeze';

describe('anecdote reducer', () => {
	test('should increment vote of an anecdote', () => {
		const state = [
			{ content: 'If it hurts, do it more often', id: 1, votes: 0 },
		];
		const anecdote = state[0];
		deepFreeze(state);
		deepFreeze(anecdote);

		const action = {
			type: 'VOTE_ANECDOTE',
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
