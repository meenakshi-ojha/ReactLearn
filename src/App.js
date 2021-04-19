import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';


class App extends Component {
   state ={
     persons:[
       {
         name:'meenakshi ojha', age:31
       },
       {
        name:' ojha', age:21
      },
      {
        name:'mee ojha', age:3
      }
     ],
     showPersons:false
   }
   switchNameHandler=(newName)=>
   {
     //console.log('wasclickcc');
     ////this.state.persons[0].name='MEENAKSHI OJHA';
     this.setState({persons:[
      {
        name:newName, age:23
      },
      {
       name:'mandavee ojha', age:31
     },
     {
       name:'mee ojha changed', age:3
     }

    ]})
   }

   nameChangedHandler=(event)=>{
    this.setState({persons:[
      {
        name:'newName', age:23
      },
      {
       name:event.target.value , age:31
     },
     {
       name:'mee ojha changed', age:3
     }

    ]})

   }
    togglePersonsHandler=()=>{
      const doesShow=this.state.showPersons;
      this.setState({showPersons:!doesShow});

    }
  render() {
    const style={
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'
    
    }
    let persons=null;
    if(this.state.showPersons){
      persons=(
        <div>
        <Person 
      name = {this.state.persons[0].name} 
      age={this.state.persons[0].age}/>
      <Person 
      name = {this.state.persons[1].name} 
      age={this.state.persons[1].age}
      changed={this.nameChangedHandler}/>
      <Person 
      name = {this.state.persons[2].name} 
      age={this.state.persons[2].age} 
      click={this.switchNameHandler.bind(this,'new name meeankshi ojha')}> 
        hobby:writing </Person>
      <Person name = ' Meenak' age=' 28'/>
      </div>
      );
    }
    return (
      <div className="App">
       <h1>react</h1>
       <button 
       style={style}
       onClick={()=>this.switchNameHandler('new meenakshi ojha')}>Switch name</button>
       <button
        style={style}
        onClick={this.togglePersonsHandler}>
          toggle persons 
       </button>
        
         {persons}
       
      </div>
    );
  }
}

export default App;
