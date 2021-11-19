import notificationReducer from './notificationReducer';

describe('notication reducer', () => {
	test('should set the value of notification property of the state', () => {
		const state = '';
		const message = 'test notification';

		const action = {
			type: 'SET_NOTIFICATION',
			message,
		};

		const newState = notificationReducer(state, action);
		expect(newState).toBe(message);
	});
});
