import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, {StyleRoot} from 'radium';//to acess advanced features in radium like media queries

class App extends Component {
  state = {
    persons: [
      { id: '0', name: 'Max', age: 28 },
      { id: 'asdsa1', name: 'Manu', age: 29 },
      { id: 'asdsa2', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ],
      otherState: 'different val',
      showPersons: false
    })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    //copy
    const person = { ...this.state.persons[personIndex] };

    //now mutating a copy
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  }

  //this syntax is usually better for a method, so
  // this keyword is referencing the class
  togglePersons = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow }) // 
  }


  deletePersons = (personIndex) => {
    const person = [...this.state.persons];// fethc all the persons, but create a copy
    // by spreading out all the persons array to a list of elements
    person.splice(personIndex, 1);// splice first person
    this.setState({ persons: person })
  }
  render() {
    const style = {
      backgroundColor: 'green',
      font: 'inherit', //from bg
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {
            // mapping the .state.persons array to 
            // jsx object array, that react will pull out
            this.state.persons.map((person, index) => {
              return <Person
                click={() => this.deletePersons(index)}
                name={person.name}
                age={person.age}
                key={person.id} //it's good to have this for react to know what to change in the ui
                changed={(event) => this.nameChangedHandler(event, person.id)}
                //change not changed
              />
            })
          }
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }
    // let classes = ['red','bold'].join(' '); //"will be "red bold" "
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');// classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');//// classes = ['red','bold']
    }
    return (
      // We need to wrap our app with styleroot for radium to work
      <StyleRoot>
        <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        {/* we call it with () bc this "()=>fn("args")" is useful where we can pass args, and it is
      resolved to call back the function, it is not executed on time
      However, BIND is better and more efficient*/}
        <button
          style={style}
          onClick={this.togglePersons}>Switch Name</button>
        {persons}{/*  clean way */}
      </div>
      </StyleRoot>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}


export default Radium(App);
//Radium is useful in media queries
// and psuedo selectors like :hover ^