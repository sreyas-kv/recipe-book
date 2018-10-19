import { SubmissionError}  from 'redux-form';

const recipeUrl = 'http://localhost:8080/recipes';


export const FETCH_RECIPES_SUCESS = 'FETCH_RECIPES_SUCESS';
export const fetchRecipesSucess = recipes => ({
    type: FETCH_RECIPES_SUCESS,
    recipes
});


export const CREATE_NEW_USER = 'CREATE_NEW_USER';
export const createNewUser = user => ({
    type: CREATE_NEW_USER,
    user
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


//Create new user
export const createUser = postdata => dispatch => { 
     fetch('http://localhost:8080/signup',{
      method: 'POST',
      body: JSON.stringify(postdata),
      headers: {
        'content-Type' : 'application/json' 
      }
    })
    .then(res => {
      if(!res.ok){
        if(
          res.headers.has('content-type') && res.headers
          .get('content-type')
          .startsWith('application/json')
        ){
          return res.json().then(err => Promise.reject(err));
        }
        return Promise.reject({
          code: res.status,
          message: res.statusText
        });
      }
      return;
    })
    .then(()=> console.log('Submitted with values', postdata))
    .catch(err => {
      const {reason, message, location} = err;
      if(reason === 'VAlidationError'){
        return Promise.reject(
          new SubmissionError({
            [location]: message
          })
        );
      }
      return Promise.reject(
        new SubmissionError({
          _error: 'Error submitting message'
        })
      );
    });
}