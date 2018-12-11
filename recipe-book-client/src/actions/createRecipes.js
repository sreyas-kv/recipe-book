import {SubmissionError} from 'redux-form';

// import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';
import { NEW_RECIPE } from './recipes';

// export const createRecipe = recipe => {
    // return fetch('http://localhost:8080/recipes',{
        // method: 'POST',
        // headers: {
            // 'content-type': 'application/json'
        // },
        // body: JSON.stringify(recipe)
    // })
    // .then(res => normalizeResponseErrors(res))
    // .then(res => res.json())
//     .catch(err => {
//         const {reason, message, location} = err;
//         if(reason === 'ValidationError'){
//             return Promise.reject(
//                 new SubmissionError({
//                     [location]: message
//                 })
//             );
//         }
//     });
// };

export const createRecipe = recipe => dispatch => {
    fetch('http://localhost:8080/recipes', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(recipe)
    })
      .then(res => res.json())
      .then(post =>
        dispatch({
          type: NEW_RECIPE,
          payload: post
        })
      );
  };
  