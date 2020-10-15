import React from 'react';
import './Person.css'

const person = (props) => {
    // return <p> im a {props.name} and i am {Math.floor(Math.random() * 30)} years old</p>
    return (
    <div className="Person">
        <p onClick={props.click}> im a {props.name} and i am {props.age} years old</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name} />
    </div>
    
    )
}

export default person