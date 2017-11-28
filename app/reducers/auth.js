import {
    LOGIN } from '../actions/auth';

const initialState = {
    user: {
        name: 'Simon macAlex',
        word: 'word',
        image: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
    },
    loggedIn: true,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                user: {
                    ...action.payload
                },
                loggedIn: true,
            };
        default:
            return state
    }

};

export default authReducer;