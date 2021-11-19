import { useDispatch, useSelector } from 'react-redux';
import anecdoteService from '../services/anecdotes';
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

  const handleVoteBtnClick = async (anecdote) => {
    const updatedAnecdote = await anecdoteService.update(anecdote.id, {
      ...anecdote,
      votes: anecdote.votes + 1,
    });
    dispatch(vote(updatedAnecdote.id));
    dispatch(setNotification(`you voted '${updatedAnecdote.content}'`));
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
