import React from 'react';
import classes from './BuildControl.css'
const buildControl = (props) => (

    <div className={classes.BuildControl}>
        <div className={classes.label}>
            {props.label}</div>

        <button className={classes.Add}
            onClick={props.added}
        >Add</button>

        <button className={classes.Less}
            onClick={props.removed}
            disabled={props.disabled}>Less</button>
    </div>
);

export default buildControl;