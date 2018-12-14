import {
    FETCH_RECIPES_SUCCESS,
    fetchRecipesSucess,
    fetchRecipes,
} from '../actions/recipes';

import { createRecipe } from '../actions/createRecipes';

describe('fetchRecipesSucess', () => {
    it('Should return the action', () => {
        const recipe = {
            recipes: []
        };
        const action = fetchRecipesSucess();
        expect(action.type).toEqual(FETCH_RECIPES_SUCCESS);
        expect(action.recipe).toEqual(recipe);
    });
});

describe('createRecipe', () => {
    it('Should return the action', () => {
        const recipeName = 'Test recipe';
        const ingeridents = 'Test ingeridents';
        const cookingTime = '10 mins';
        const  directions = 'Mix everything';
        const action = createRecipe(recipeName, ingeridents, cookingTime, directions);
        expect(action.type).toEqual(NEW_RECIPE);
        expect(action.recipeName).toEqual(recipeName);
        expect(action.ingeridents).toEqual(ingeridents);
        expect(action.cookingTime).toEqual(cookingTime);
        expect(action.directions).toEqual(directions);
    });
});

describe('fetchRecipes', () => {
    it('Should dispatch fetchRecipesSuccess', () => {
        const recipe = {
            recipes: []
        };

        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return recipe;
                }
            })
        );

        const dispatch = jest.fn();
        return fetchRecipesSucess()(dispatch).then(() => {
            expect(fetch).toHaveBeenCalledWith('/recipes');
            expect(dispatch).toHaveBeenCalledWith(fetchRecipesSucess(recipe));
        });
    });
});