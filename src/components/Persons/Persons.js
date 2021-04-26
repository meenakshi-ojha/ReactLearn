import React ,{Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
  // static getDerivedStateFromProps(props ,state)
  // {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }
  shouldComponentUpdate(nextProps,nextState){

    console.log('[persons.js] should component update');
    if(nextProps.persons!== this.props.persons)
    {return true;}
    else 
    {return false;}
  }
  getSnapshotBeforeUpdate(prevprop,prevState)
  {
    console.log('[persons.js]getSnapshotBeforeUpdate');
    return {message:'Snapshot!'};
  }
  componentDidUpdate(prevprop,prevState,snapshot)
  {
    console.log('[Persons.js] ComponentDIDupdate');
    console.log(snapshot);
  }
  componentWillUnmount(){
    console.log('[Persons.js] componentWillUnmount');
  }
  render()
  {
    console.log('[Persons.js] rendering....');
      return (
        this.props.persons.map((person,index)=>
        {
                  
          return (<Person
          key={person.id}
          click={()=>this.props.clicked(index)}
          name={person.name} 
          age={person.age}
          namechanged={(event)=>this.props.namechanged(event,person.id)}
          agechanged={(event)=>this.props.agechanged(event,person.id)}
          />)
                    
        }
      ));
      }
    }

export default Persons;