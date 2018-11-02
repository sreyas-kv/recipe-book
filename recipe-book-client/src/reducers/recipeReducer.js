import * as actions from '../actions/recipes';

const initialState = {
    recipes: []
};

export const recipesReducer = (state = initialState, action) => {
    if(action.type === actions.FETCH_RECIPES_SUCCESS){
        return action.recipes;
    } else if(action.type === actions.DISPLAY_RECIPE){
        return Object.assign({}, state, {
            display: [...state.recipes,{
                title: action.title
            }]
        })
    }

    else{
        return state;
    }
}
