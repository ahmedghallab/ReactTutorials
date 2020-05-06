import React from 'react';
import classes from './BuildControls.css'
import BuildContorl from './BuildControl/BuildControl'
const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'TurkeyBacon', type: 'turkeyBacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
];
const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current price: <strong className={classes.fontPrice}>{props.price.toFixed(2)}</strong></p>
        {
            controls.map(
                ctrl => (
                    <BuildContorl
                        key={ctrl.label}
                        label={ctrl.label}
                        added={() => props.ingredientAdded(ctrl.type)}
                        removed={() => props.ingredientRemoved(ctrl.type)}
                        disabled={props.disabled[ctrl.type]}>
                    </BuildContorl>
                )
            )
        }
        <button
            className={classes.OrderButton}
            disabled={!props.purchaseable}
            onClick={props.ordered}
        >Checkout</button>
    </div>
);

export default buildControls;