import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';



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
          {this.state.persons.map((person,index)=>
            {
              return <Person
                click={this.deletePersonHandler.bind(this,index)}
                name={person.name} 
                age={person.age}
                key={person.id}
                changed={((event)=>this.nameChangedHandler(event,person.id))}/>
            })}
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
    }
    return (
      <div className="App">
       <h1>react</h1>
       {/* <button 
       style={style}
       onClick={()=>this.switchNameHandler('New Meenakshi Ojha when clicked by button')}>Switch name</button> */}
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
