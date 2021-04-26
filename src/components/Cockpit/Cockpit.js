import React,{useEffect,useRef} from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';
const cockpit =(props)=>
{
  const toggleBtnRef= useRef(null);
    useEffect(()=>{
      console.log('[cockpit.js] useEffect')
      //http req..
      setTimeout(()=>{toggleBtnRef.current.focus()},3000)
      //toggleBtnRef.current.click();
      return()=>{
        console.log('[Cockpit.js] cleanup work in useEffect');
      }
    },[])

    let btnClass=[classes.Button];
    const assignedClasses=[];
    if(props.showPersons)
    {btnClass.push(classes.Red);}
    if(props.personsLength<=2){
      assignedClasses.push(classes.red);
    }
    if(props.personsLength<=1){
      assignedClasses.push(classes.bold);
    }
    return(
        <div className={classes.Cockpit}>
        <h1>{props.title}</h1>
        <p className={assignedClasses.join(' ')}>This is a React Application</p>
        <button
        ref={toggleBtnRef}
         className={btnClass.join(' ')}
           onClick={props.clicked}>
           Toggle Persons
        </button>
        <AuthContext.Consumer>
          {(context) =>
           <button
           className={btnClass.join(' ')}
           onClick={context.login}>
             Login
           </button>
           }
       
        </AuthContext.Consumer>
        </div>
    );
}
export default React.memo(cockpit);