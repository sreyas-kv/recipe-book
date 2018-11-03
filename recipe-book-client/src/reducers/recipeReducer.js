import * as actions from '../actions/recipes';

const initialState = {
    recipes: []
};

export const recipesReducer = (state = initialState, action) => {
    if(action.type === actions.FETCH_RECIPES_SUCCESS){
        return action.recipes;
    } else if(action.type === actions.DISPLAY_RECIPE){
        // console.log('Reducer', state.recipes)
        // return Object.assign({}, state, {
        //     selected: [...state.recipes,{
        //         title: action.recipeName
        //     }
        //     ]})

        return Object.assign({}, state, {
            selected: [...state.recipes,{
                recipes: action.recipes
            }]
        })

    }
    else{
        return state;
    }
}
