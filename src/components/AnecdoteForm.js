import { useDispatch } from 'react-redux';
import { createAnecdote } from '../reducers/anecdoteReducer';

const AnecdoteForm = (e) => {
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		const content = e.target.content.value;
		e.target.content.value = '';
		dispatch(createAnecdote(content));
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
