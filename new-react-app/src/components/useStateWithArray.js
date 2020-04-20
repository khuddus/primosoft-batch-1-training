import React, {useState} from 'react';

function Array(){
    const [items, setItem] = useState([])
    const val = Math.floor(Math.random()*10) + 1
    const AddItem = () =>{
        setItem([...items,val])
    }
    return(
        <div>
        <button onClick = {AddItem}>Add item</button>
        <ul>
            {items.map(key => (<li>{key}</li>))}
        </ul>
        </div>
    )
}
export default Array;