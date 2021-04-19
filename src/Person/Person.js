// in its simplest form a componenet is a function that returns some jsx
import React from 'react';
import './Person.css';

const person = (props)=>{
    return(
        <div className="Person">
            <p>I'm {props.name } and I am {props.age} years old </p>
           <button onClick={props.click} className="button">delete this person</button>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>

         
               )
};
export default person;