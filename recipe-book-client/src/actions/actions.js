
const recipeUrl = 'http://localhost:8080/recipes';


export const FETCH_RECIPES_SUCESS = 'FETCH_RECIPES_SUCESS';
export const fetchRecipesSucess = recipes => ({
    type: FETCH_RECIPES_SUCESS,
    recipes
});

export const fetchRecipes = () => dispatch => {
    fetch(recipeUrl)
    .then(res => {
        if(!res.ok){
            return Promise.reject(res.statusText);
        }
        return res.json();
    })
    .then(recipe => {
        dispatch(fetchRecipesSucess(recipe));
    });
};