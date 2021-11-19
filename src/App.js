import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import anecdoteService from './services/anecdotes';
import { initAnecdotes } from './reducers/anecdoteReducer';
import Notification from './components/Notification';
import Filter from './components/Filter';
import Anecdotes from './components/Anecdotes';
import AnecdoteForm from './components/AnecdoteForm';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    anecdoteService
      .getAll()
      .then((anecdotes) => dispatch(initAnecdotes(anecdotes)));
  }, [dispatch]);

  return (
    <div>
      <Notification />
      <h2>Anecdotes</h2>
      <Filter />
      <Anecdotes />
      <h2>create new</h2>
      <AnecdoteForm />
    </div>
  );
};

export default App;
