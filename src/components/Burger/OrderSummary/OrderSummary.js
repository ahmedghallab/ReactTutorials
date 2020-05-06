import React from 'react'
import Aux from '../../../hoc/Aux'
const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(ingredienKey => {
            return (
            <li key={ingredienKey}>
                <span style={{ textTransform: 'capitalize' }}>{ingredienKey}</span>
                : {props.ingredients[ingredienKey]}
            </li>
            );
        });
    return (
        <Aux>
            <h2> <strong>Order summary</strong></h2>
            <ul>{ingredientSummary}</ul>

        </Aux>
    );
};

export default orderSummary;