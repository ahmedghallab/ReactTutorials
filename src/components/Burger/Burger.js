import React from 'react';
import classes from './Burger.css'
import Aux from '../../hoc/Aux';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
const burger = (props) =>{
    return(
        <Aux>
            <div className={classes.Burger}>
                {/* we did the validation for these types below */}
                <BurgerIngredient type="breadTop" />
                <BurgerIngredient type="cheese" />
                <BurgerIngredient type="meat" />
                <BurgerIngredient type="breadBottom" />
            </div>
        </Aux>
    );
}
export default burger;