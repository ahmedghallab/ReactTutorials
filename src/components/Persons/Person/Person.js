import React, { Component } from 'react';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';

class Person extends Component {
    constructor(props) {
        super();
        this.inputElementRef = React.createRef();
    }
    componentDidMount() {
        // this.inputElement.focus(); alt way
        this.inputElementRef.current.focus();
    }
    render() {
        console.log('[Person.js] rendering...');
        return (
            <div className={classes.Person} >
                <p onClick={this.props.click}>
                    I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input
                    type="text"
                    onChange={this.props.changed}
                    // ref={(inputEl) => { this.inputElement = inputEl }} alt way
                    ref={this.inputElementRef}//behind the scence react can connect the dots
                    value={this.props.name}
                />
            </div>
        );
    }
}


export default withClass(Person, classes.Person);
