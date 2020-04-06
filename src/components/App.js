import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { addCount } from '../store/actions';

import './App.css';

const App = () => {
  const dispatch = useDispatch();
  
  const count = useSelector(state => state.count);
  
  const handleClick = () => dispatch(addCount());

  return (
    <div className="App">
      <h3>
        Count: {count}
      </h3>
    <button onClick={handleClick}>
      Increase count
    </button>
    </div>
  );
};

export default App;