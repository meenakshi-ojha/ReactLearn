import React from 'react';
import Person from './Person/Person';
const persons=(props) => props.persons.map(
            (person,index)=>
            {
              return<Person
                key={person.id}
                click={()=>props.clicked(index)}
                name={person.name} 
                age={person.age}
                namechanged={(event)=>props.namechanged(event,person.id)}
                agechanged={(event)=>props.agechanged(event,person.id)}
                />
                
            }
            );

export default persons;