import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


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
  nameChangedHandler=(event,id)=>
  {
    const personIndex=this.state.persons.findIndex(
      p=>{return p.id===id;}
      )
    const person={...this.state.persons[personIndex]};
    person.name=event.target.value;
    const persons=[...this.state.persons];
    persons[personIndex]=person;
    this.setState({persons:persons})

   }
  ageChangedHandler=(event,id)=>
  {
    const personIndex=this.state.persons.findIndex(p=>
    {
    return p.id===id;
    })
    const person={...this.state.persons[personIndex]};
    person.age=event.target.value;
    const persons=[...this.state.persons];
    persons[personIndex]=person;
    this.setState({persons:persons})}
    
  togglePersonsHandler=()=>
  {
      const doesShow=this.state.showPersons;
      this.setState({showPersons:!doesShow});}

  deletePersonHandler=(personIndex)=>
  {
      const persons=[...this.state.persons];
      persons.splice(personIndex,1);
      this.setState({persons:persons});}
  render() {
    
    let persons=null;
    
    if(this.state.showPersons){
      persons=(
        
          <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          namechanged={this.nameChangedHandler}
          agechanged={this.ageChangedHandler}
          />
        
      );
      
     
    }
    
    return (
      <div className={classes.App}>
      
        <Cockpit 
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        clicked={this.togglePersonsHandler}/>

         {persons}
       
      </div>
      
    );
  }
}

export default App;
