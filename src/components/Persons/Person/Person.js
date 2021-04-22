// in its simplest form a componenet is a function that returns some jsx
import React,{Component} from 'react';
import classes from './Person.css';

class Person extends Component{
    render() {console.log('[Person.js] rendering....');
    
    return(
        //<div className="Person" style={style}> 
        
        <div className={classes.Person}>
            <p>I'm {this.props.name } and I am {this.props.age} years old </p>
           <button onClick={this.props.click} className={classes.Button}>delete this person</button>
            <p>{this.props.children}</p><br/>
            Change Name <br/>
            <input type="text" onChange={this.props.namechanged} value={this.props.name}/><br/>
            Change Age <br/>
            <input type="text" onChange={this.props.agechanged} value={this.props.age}/>
            </div>

         
               );}
}
export default Person;