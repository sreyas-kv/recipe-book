import * as actions from '../actions/actions';

const initialState = {
    recipes: []
};

export const recipesReducer = (state=initialState, action) => {
    if(action.type === actions.FETCH_RECIPES_SUCESS){
        return action.recipes;
    }
    else{
        return state;
    }
}
