import React, { Component } from 'react';
import Person from './Person/Person';
import classes from './App.css';
//import Radium ,{ StyleRoot }from 'radium';
//import styled from 'styled-components';

// const StyledButton =styled.button`
// background-color:${props =>props.alt ? 'maroon' :'green'};
// color:white;
// font:inherit;
// border:1px solid blue;
// padding:8px;
// cursor:pointer;

// &:hover{
//   background-color:${props =>props.alt ? 'salmon' :'lightgreen'};
//   color:black;
// }`;


class App extends Component {
   state ={
     persons:[
       {
        id:'1',name:'Meenakshi Ojha', age:31
       },
       {
        id:'2',name:'Mandavee Ojha', age:21
      },
      {
        id:'3', name:'max ruth', age:3
      }
     ],
     showPersons:false
   }
  //  switchNameHandler=(newName)=>
  //  {
  //    //console.log('wasclickcc');
  //    ////this.state.persons[0].name='MEENAKSHI OJHA';
  //    this.setState({persons:[
  //     {
  //       name:newName, age:23
  //     },
  //     {
  //      name:'New MandavI ojha', age:31
  //    },
  //    {
  //      name:'Maxime Vachire Lagrave', age:3
  //    }

  //   ]})
  //  }

   nameChangedHandler=(event,id)=>{
    const personIndex=this.state.persons.findIndex(p=>{
      return p.id===id;
    })
    const person={
      ...this.state.persons[personIndex]};
      person.name=event.target.value;
      const persons=[...this.state.persons];
      persons[personIndex]=person;

    this.setState({persons:persons})

   }
    togglePersonsHandler=()=>{
      const doesShow=this.state.showPersons;
      this.setState({showPersons:!doesShow});

    }
    deletePersonHandler=(personIndex)=>{
      const persons=[...this.state.persons];
      persons.splice(personIndex,1);
      this.setState({persons:persons});

    }
  render() {
    // const style={
    //   backgroundColor:'green',
    //   color:'white',
    //   font:'inherit',
    //   border:'1px solid blue',
    //   padding:'8px',
    //   cursor:'pointer',
    //   ':hover':{
    //     backgroundColor:'Lightgreen',
    //     color:'black'
    //   }
    
    // }
    let persons=null;
    let btnClass=[classes.Button];
    if(this.state.showPersons){
      persons=(
        <div>
          {this.state.persons.map((person,index)=>
            {
              return <Person
                click={this.deletePersonHandler.bind(this,index)}
                name={person.name} 
                age={person.age}
                key={person.id}
                changed={((event)=>this.nameChangedHandler(event,person.id))}/>
            })
            }
            {/* <Person 
          name = {this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
          <Person 
          name = {this.state.persons[1].name} 
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler}/>
          <Person 
          name = {this.state.persons[2].name} 
          age={this.state.persons[2].age} 
          click={this.switchNameHandler.bind(this,'new name meeankshi ojha when para clicked')}> 
            hobby:writing </Person>
          <Person name = ' Meenak' age=' 28'/> */}
        </div>
      );
      // style.backgroundColor='maroon';
      // style[':hover']={
      //   backgroundColor:'pink',
      //   color:'black'
      // };
      btnClass.push(classes.Red);
    }
    let assignedClasses=[];
    if(this.state.persons.length<=2){
      assignedClasses.push('red');
    }
    if(this.state.persons.length<=1){
      assignedClasses.push('bold');
    }
    return (//<StyleRoot>
      <div className={classes.App}>
       <h1>React</h1>
       <p className={assignedClasses.join(' ')}>This is a React Application</p>
       {/* <button 
       style={style}
       onClick={()=>this.switchNameHandler('New Meenakshi Ojha when clicked by button')}>Switch name</button> */}
       <button
        className={btnClass.join(' ')}
          onClick={this.togglePersonsHandler}>
          toggle persons 
       </button>
        
         {persons}
       
      </div>
      //</StyleRoot>
    );
  }
}

export default App;
