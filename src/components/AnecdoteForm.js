import { useDispatch } from 'react-redux';
import anecdoteService from '../services/anecdotes';
import { createAnecdote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

const AnecdoteForm = (e) => {
	const dispatch = useDispatch();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const content = e.target.content.value;
		e.target.content.value = '';
		const anecdote = await anecdoteService.create(content);
		dispatch(createAnecdote(anecdote));
		dispatch(setNotification(`'${anecdote.content}' created`));
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
