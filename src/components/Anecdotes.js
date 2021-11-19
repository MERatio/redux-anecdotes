import { useDispatch, useSelector } from 'react-redux';
import { updateAnecdote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';
import Anecdote from './Anecdote';

const Anecdotes = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector((state) =>
    state.anecdotes
      .filter((anecdote) =>
        anecdote.content.toLowerCase().includes(state.filter.toLowerCase())
      )
      .sort((a, b) => b.votes - a.votes)
  );

  const handleVoteBtnClick = async (anecdote) => {
    dispatch(
      updateAnecdote(anecdote.id, {
        ...anecdote,
        votes: anecdote.votes + 1,
      })
    );
    dispatch(setNotification(`you voted '${anecdote.content}'`, 5));
  };

  return (
    <div>
      {anecdotes.map((anecdote) => (
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          onVoteBtnClick={() => handleVoteBtnClick(anecdote)}
        />
      ))}
    </div>
  );
};

export default Anecdotes;
