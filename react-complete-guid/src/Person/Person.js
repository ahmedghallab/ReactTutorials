import React from 'react';
//this Js syntace is changed to react.createElment, so we do ^


const person = (props) => {

    return <p>I'm {props.name} a person and  have age that {props.age}!</p>
}


export default person;