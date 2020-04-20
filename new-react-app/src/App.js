import React, {useState} from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter';
import Counter from './components/functionCounter';
import CounterTwo from './components/functionCounterTwo';
import Form from './components/useStateWithObject';
import Array from './components/useStateWithArray';
const App = () => {
  
  return (
    <div>
      <h1>'Function Components!'</h1>
      <Array />
      
    </div>
  );
};
export default App;
