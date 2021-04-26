import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import AuthContext from '../context/auth-context';


class App extends Component {
  //Lifecycle creation step 1 create constructor
  constructor(props)
  {
    super(props);
    console.log('[App.js] constructor');
    //can also assign state in constructor using this.state=....
  }
  //more modern way of assigning state
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
     showPersons:false,
     showCockpit:true,
     authentication:false
   }
   //Lifecycle Hook 2
   static getDerivedStateFromProps(props,state)
   {
     console.log('[App.js] getDerivedStateFromProps',props);
     return state;
   }
   componentDidMount()
   {
     console.log('[App.js] ComponentDidMount');
   }

   shouldComponentUpdate(nextProps,nextState){
    console.log('[App.js] should component update');
    return true;
  }
  getSnapshotBeforeUpdate(prevprop,prevState)
  {
    console.log('[app.js]getSnapshotBeforeUpdate');
    return {message:'app Snapshot!'};
  }
  componentDidUpdate(prevprop,prevState,snapshot)
  {
    console.log('[App.js] ComponentDIDupdate');
    console.log(snapshot);
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
      loginHandler=()=>
      {
        this.setState({authentication:true});
      }
  render() {
    console.log('[App.js] render');  
    let persons=null;
    
    if(this.state.showPersons){
      persons=(
        
          <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          namechanged={this.nameChangedHandler}
          agechanged={this.ageChangedHandler}
          isAuthenticated={this.state.authentication}
          />
        
      );
      
     
    }
    
    return (
      <div className={classes.App}>
      <button onClick={()=>{this.setState({showCockpit:false})}}>Remove Cockpit</button>
      <AuthContext.Provider value={{authenticate:this.state.authentication,
      login:this.loginHandler}}>
        {this.state.showCockpit?
        <Cockpit 
        title={this.props.title}
        showPersons={this.state.showPersons}
        personsLength={this.state.persons.length}
        clicked={this.togglePersonsHandler}
        />:null}

         {persons}
         </AuthContext.Provider> 
      </div>
      
    );
  }
}

export default App;
