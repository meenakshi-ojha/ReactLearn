import React from 'react';
import classes from './Cockpit.css';
const cockpit =(props)=>{
    let btnClass=[classes.Button];
    const assignedClasses=[];
    if(props.showPersons)
    {btnClass.push(classes.Red);}
    if(props.persons.length<=2){
      assignedClasses.push(classes.red);
    }
    if(props.persons.length<=1){
      assignedClasses.push(classes.bold);
    }
    return(
        <div className={classes.Cockpit}>
        <h1>{props.title}</h1>
        <p className={assignedClasses.join(' ')}>This is a React Application</p>
        <button
         className={btnClass.join(' ')}
           onClick={props.clicked}>
           Toggle Persons
        </button>
        </div>
    );
}
export default cockpit;