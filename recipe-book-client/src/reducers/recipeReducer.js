import * as actions from '../actions/recipes';

const initialState = {
    recipes: [],
    textInput: [{ingredient: ''}]
};

export const recipesReducer = (state = initialState, action) => {
    if(action.type === actions.FETCH_RECIPES_SUCCESS){
        return action.recipes;
    } else if(action.type === actions.DISPLAY_RECIPE){
        return Object.assign({}, state, {
            selected: [...state.recipes,{
                recipes: action.recipes
            }]
        })
    } else if( action.type === actions.NEW_RECIPE){
        // return Object.assign({}, state, {
        //     textInput: [...state.textInput].concat([{ingredient: ''}])
        // })
        return Object.assign({}, state, {
                textInput: [...state.textInput].concat([{ingredient: ''}])
            })
    }
    else{
        return state;
    }
}