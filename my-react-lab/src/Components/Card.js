import React from 'react';

function Card(props) {
return (
    <div>
        <p>Hello, {props.name}!</p>
        <p>You are {props.age} years old.</p>
    </div>
);
}
export default Card;