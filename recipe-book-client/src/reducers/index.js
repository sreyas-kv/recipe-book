import { combineReducers } from 'redux';
import {recipesReducer} from './recipeReducer';
import {createNewUserReducer} from './signupReducer';

export const rootReducer = combineReducers({
    recipes: recipesReducer,
    user: createNewUserReducer
  });
