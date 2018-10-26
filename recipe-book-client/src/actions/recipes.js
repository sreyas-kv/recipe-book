import { SubmissionError}  from 'redux-form';

import {normalizeResponseErrors} from './utils';

// import {API_BASE_URL} from '../config'
const recipeUrl = 'http://localhost:8080/recipes';


export const FETCH_RECIPES_SUCESS = 'FETCH_RECIPES_SUCESS';
export const fetchRecipesSucess = recipes => ({
    type: FETCH_RECIPES_SUCESS,
    recipes
});


//Create new recipe
// export const CREATE_RECIPE = 'CREATE_RECIPE';
// export const createRecipe = recipe => ({
//     type: CREATE_RECIPE
// })

//Fetching Recipes 
export const fetchRecipes = () => dispatch => {
    fetch(recipeUrl)
    .then(res => {
        if(!res.ok){
            return Promise.reject(res.statusText);
        }
        return res.json();
    })
    .then(recipes => {
        dispatch(fetchRecipesSucess(recipes));
    });
};

//Create new recipe
export const createRecipes = recipe => dispatch => {
    return fetch(recipeUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(recipe)
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .catch(err => {
        const {reason, message, location} = err;
        if(reason === 'ValidationError'){
            return Promise.reject(
                new SubmissionError({
                    [location]: message
                })
            );
        }
    });
};