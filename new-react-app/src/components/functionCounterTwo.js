import React, {useState} from'react';

function CounterTwo(){
    const intialState = 0;
    const [count, setState] = useState(intialState);
    const incrementFive = () => {
        for(let i=0; i< 5; i++){
            setState(prevCount => prevCount + 1);
        }
    }
    return(
        <div>
            <p>count = {count}</p>
            <button onClick = {() => setState(intialState)}>Reset</button>
            <button onClick = {() => setState(count + 1)}>increment</button>
            <button onClick = {() => setState(count - 1)}>decrement</button>
            <button onClick = {incrementFive}>IncrementFive</button>
        </div>
    )
}

export default CounterTwo; 