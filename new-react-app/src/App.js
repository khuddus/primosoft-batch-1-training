import React, {useState} from 'react';
import './App.css';

const App = () => {
  const [greeting, setstate] = useState(
    'Function Components!'
  );
  return (
    <div>
      <h1>{greeting}</h1>
      <input
        type="text"
        onChange={event => setstate(event.target.value)}
      />
    </div>
  );
};
export default App;
