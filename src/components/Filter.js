import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../reducers/filterReducer';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input onChange={handleFilterChange} />
    </div>
  );
};

export default Filter;
