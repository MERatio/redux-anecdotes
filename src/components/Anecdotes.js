import { useDispatch, useSelector } from 'react-redux';
import { vote } from '../reducers/anecdoteReducer';
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

  const handleVoteBtnClick = (anecdote) => {
    dispatch(vote(anecdote.id));
    dispatch(setNotification(`you voted '${anecdote.content}'`));
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
