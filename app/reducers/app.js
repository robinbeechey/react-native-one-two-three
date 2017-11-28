import {
    ROOT_CHANGED, INITIALIZED } from '../actions/app';

const initialState = {
    root: 'init'
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case ROOT_CHANGED:
            console.log(action);
            return {
                root: action.root
            };
        default:
            return state
    }

};

export default appReducer;