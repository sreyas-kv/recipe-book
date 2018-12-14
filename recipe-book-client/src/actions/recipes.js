import { SubmissionError}  from 'redux-form';

import {normalizeResponseErrors} from './utils';

// import {API_BASE_URL} from '../config'
const recipeUrl = 'https://recipe-book-server.herokuapp.com/recipes';


export const FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS';
export const NEW_RECIPE = 'NEW_RECIPE';

export const fetchRecipesSucess = recipes => ({
    type: FETCH_RECIPES_SUCCESS,
    recipes
});

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

//Action for clicking a button
export const DISPLAY_RECIPE = 'DISPLAY_RECIPE';
export const displayRecipe = recipes => ({
    type: DISPLAY_RECIPE,
    recipes
});

export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';
export const addIngredients = ingredient => ({
    type: ADD_INGREDIENTS
});

//Create new recipe
// export const createRecipes = recipe => dispatch => {
//     return fetch(recipeUrl, {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify(recipe)
//     })
//     .then(res => normalizeResponseErrors(res))
//     .then(res => res.json())
//     .catch(err => {
//         const {reason, message, location} = err;
//         if(reason === 'ValidationError'){
//             return Promise.reject(
//                 new SubmissionError({
//                     [location]: message
//                 })
//             );
//         }
//     });
// };