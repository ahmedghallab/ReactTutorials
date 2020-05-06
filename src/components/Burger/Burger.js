import React from 'react';
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
const burger = (props) => {
    //we do this becauset props is coming in as an Object
    // while the passed in type is dic
   let transformedIngredients = Object.keys(props.ingredients)//gets the keys
        .map(ingredientKey => {
            return [...Array(props.ingredients[ingredientKey])].map( (_, i) => {
                return <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />;
            });
        })
        .reduce((arr,el)=>{
            return arr.concat(el)
        if(transformedIngredients === 0){
            transformedIngredients= <p>ur burger is lame</p>
        }

    return (
        <div className={classes.Burger}>
            {/* we did the validation for these types below */}
            <BurgerIngredient type="breadTop" />
            {transformedIngredients}
            <BurgerIngredient type="breadBottom" />
        </div>
    );
}
export default burger;