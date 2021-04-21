// in its simplest form a componenet is a function that returns some jsx
import React from 'react';
import classes from './Person.css';

const person = (props)=>{
    
    return(
        //<div className="Person" style={style}> 
        
        <div className={classes.Person}>
            <p>I'm {props.name } and I am {props.age} years old </p>
           <button onClick={props.click} className={classes.Button}>delete this person</button>
            <p>{props.children}</p><br/>
            Change Name <br/>
            <input type="text" onChange={props.namechanged} value={props.name}/><br/>
            Change Age <br/>
            <input type="text" onChange={props.agechanged} value={props.age}/>
            </div>

         
               )
};
export default person;