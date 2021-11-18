import { useDispatch } from 'react-redux';
import { createAnecdote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

const AnecdoteForm = (e) => {
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		const content = e.target.content.value;
		e.target.content.value = '';
		dispatch(createAnecdote(content));
		dispatch(setNotification(`'${content}' created`));
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<input name="content" />
			</div>
			<button>create</button>
		</form>
	);
};

export default AnecdoteForm;
