import React, { useState } from 'react'; //react hook


import Person from './Person/Person'
import './App.css';



const app = props => {
  /**
   * Use state returns an array with exactly two els (the state, callback fn)
   */
  const [personState, setPersonstate] = useState({
    persons: [
      { name: "Max1", age: 28 },
      { name: "Max2", age: 28 },
      { name: "Max3", age: 28 }

    ]
  })

  const switchNameHandler = () => {
    console.log('Was clicked!');
    // Don't do this: this.state.persons[0.name = 'Maxmilian';
    //one of the 2 things that update the DOM this and the props
    setPersonState({
      // this replaces the old persons array. Doesn't add to it
      // manuallly make sure to include otherstat data OR (BETTER)
      // const [otherState, setOtherState] = useState('some other value');
      persons: [
        { name: "Max12", age: 28 },
        { name: "Max32", age: 28 },
        { name: "Max344", age: 28 }
      ],
      otherState: personState.otherState

    });
  };
  return (
    // this is a syntactical sugar to html that is written in React libraries as JSX, which is the reason why some files are 
    // created as .JSX
    <div className="App">
      <h1>Hi, React</h1>
      <button onClick={switchNameHandler}>Switch button</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age} ></Person>
    </div>
  );

}

export default app;
  //event handler
