import * as actions from '../actions/actions';

const initialState = {
    user: []
};

export const createNewUserReducer = (state=initialState, action) => {
    if(action.type === actions.CREATE_NEW_USER){
        return action.user;
    }
    else{
        return state;
    }
}
