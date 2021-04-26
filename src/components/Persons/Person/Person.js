// in its simplest form a componenet is a function that returns some jsx
import React,{Component} from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Auxiliary';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';
class Person extends Component{
    constructor(){
        super();
        this.inputElementRef=React.createRef();
    }
    componentDidMount()
    {
        
        this.inputElementRef.current.focus();
        this.inputElement.focus();
    }
    render() {console.log('[Person.js] rendering....');
    
    return(
        //<div className="Person" style={style}> 
        
        <Aux>.
        <div className={classes.Person}>

            <AuthContext.Consumer>
                {(context)=>context.authenticate ? <p>Authenticated</p>:<p>Please log in</p>}
            </AuthContext.Consumer>
            {}
            <p>I'm {this.props.name } and I am {this.props.age} years old </p>
           <button onClick={this.props.click} className={classes.Button}>delete this person</button>
            <p>{this.props.children}</p><br/>
            Change Name <br/>
            <input
            ref={this.inputElementRef}
             type="text" 
             onChange={this.props.namechanged} 
             value={this.props.name}/><br/>
            Change Age <br/>
            <input 
            ref={(inputEl)=>{this.inputElement=inputEl}}
            type="text" 
            onChange={this.props.agechanged} 
            value={this.props.age}/>
            </div>
            <h1>Hello</h1>
            </Aux>
         
               );}
}
Person.propTypes={
    click:PropTypes.func,
    name:PropTypes.string,
    age:PropTypes.number,
    namechanged:PropTypes.func,
    agechanged:PropTypes.func
};
export default Person;