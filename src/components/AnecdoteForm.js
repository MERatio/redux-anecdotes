import { connect } from 'react-redux';
import { createAnecdote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

const AnecdoteForm = ({ createAnecdote, setNotification }) => {
	const handleSubmit = async (e) => {
		e.preventDefault();
		const content = e.target.content.value;
		e.target.content.value = '';
		createAnecdote(content);
		setNotification(`'${content}' created`, 5);
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

const mapDispatchToProps = {
	createAnecdote,
	setNotification,
};

export default connect(null, mapDispatchToProps)(AnecdoteForm);
