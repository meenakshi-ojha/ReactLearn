// in its simplest form a componenet is a function that returns some jsx
import React from 'react';
import './Person.css';
//import Radium from 'radium';
import styled from 'styled-components';
            const StyledDiv= styled.div`
            width: 60%;
            margin: 20px auto;
            border: 1px solid #eee;
            box-shadow: 0px 2px 3px #ccc;
            padding: 16px;
            text-align: center;

            @media (min-width:500px){

            width: '450px'
            }`
;
const person = (props)=>{
    // const style={
    //     '@media (min-width:500px)':{
    //         width: '450px'
    //     }
    // };
    // const buttonStyle={
    //     backgroundColor:'gray',
    //     color:'white',
    //     font:'inherit',
    //     border:'1px solid blue',
    //     padding:'8px',
    //     cursor:'pointer',
    //     ':hover':{
    //       backgroundColor:'lightblue',
    //       color:'black'
    //     }

    // };
    return(
        //<div className="Person" style={style}> 
        <StyledDiv>
            <p>I'm {props.name } and I am {props.age} years old </p>
           <button onClick={props.click} >delete this person</button>
            <p>{props.children}</p><br/>
            Change Name  ::
            <input type="text" onChange={props.changed} value={props.name}/>
            </StyledDiv>

         
               )
};
export default person;