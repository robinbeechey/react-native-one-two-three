import {
    CHANGE_PRIMARY_COLOR } from '../actions/theme';

const initialState = {
    user: {
        name: 'Simon macAlex',
        word: 'word',
        image: 'http://www.jbascollege.edu.in/dept_info/176_dummy-profile.jpg',
    },
    loggedIn: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }

};

export default authReducer;