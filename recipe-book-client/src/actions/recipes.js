import { SubmissionError}  from 'redux-form';

import {normalizeResponseErrors} from './utils';

// import {API_BASE_URL} from '../config'
const recipeUrl = 'http://localhost:8080/recipes';


export const FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS';
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

//Get the selected Recipe
// const selectedRecipeUrl = `http://localhost:8080/recipes/`;
// export const FETCH_RECIPES_SELECTED_SUCCESS = 'FETCH_RECIPES_SELECTED_SUCCESS';
// export const fetchRecipesSelectedSuccess = recipes => ({
//     type: FETCH_RECIPES_SELECTED_SUCCESS,
//     recipes
// });

// export const fetchSelectedRecipe = (id) => dispatch => {
//     console.log('Test Action');
//     fetch(`${selectedRecipeUrl}/${id}`)
//     .then(res => {
//         if(!res.ok){
//             return Promise.reject(res.statusText);
//         }
//         return res.json();
//     })
//     .then(recipes => {
//         dispatch(fetchRecipesSucess(recipes));
//         console.log(recipes);
//     });
// };


//Action for clicking a button
export const DISPLAY_RECIPE = 'DISPLAY_RECIPE';
export const displayRecipe = recipes => ({
    type: DISPLAY_RECIPE,
    recipes
});



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