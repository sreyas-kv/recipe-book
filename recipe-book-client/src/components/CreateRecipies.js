import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {createRecipes} from '../actions/recipes';
import Input from'./input';
import createRecipe from '../actions/createRecipes';

import {required, nonEmpty, matches, length, isTrimmed} from '../validators';

export class CreateRecipes extends React.Component {
    onSubmit(values){
        const {recipeName, ingeridents, cookingTime, directions} = values;
        const createMethod = {recipeName, ingeridents, cookingTime, directions};
        return this.props
        .dipatch(createRecipe(recipes));
    }
}