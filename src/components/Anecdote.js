const Anecdote = ({ anecdote, onVoteBtnClick }) => {
	return (
		<div>
			<div>{anecdote.content}</div>
			<div>
				has {anecdote.votes}
				<button onClick={onVoteBtnClick}>vote</button>
			</div>
		</div>
	);
};

export default Anecdote;
