import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

import {recipesReducer} from './reducers/index';



export default createStore(recipesReducer, applyMiddleware(thunk));
