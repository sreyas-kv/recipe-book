import { combineReducers } from 'redux';
import {recipesReducer} from './recipeReducer';
import {createRecipeReducer} from './createRecipeReducer';

export const rootReducer = combineReducers({
    recipes: recipesReducer,
    newRecipe: createRecipeReducer
  });
