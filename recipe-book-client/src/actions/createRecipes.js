import {SubmissionError} from 'redux-form';

// import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const createRecipe = newRecipe => {
    return fetch('http://localhost:8080/recipes',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newRecipe)
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .catch(err => {
        const {reason, message, location} = err;
        if(reason === 'ValidationError'){
            return Promise.reject(
                new SubmissionError({
                    [location]: message
                })
            );
        }
    });
};