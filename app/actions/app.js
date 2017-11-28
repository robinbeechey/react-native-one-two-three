export const INITIALIZED = 'INITIALIZED';
export const ROOT_CHANGED = 'ROOT_CHANGED';
import firebase from '../../firebase';

export function appInitialized() {
    return function (dispatch, getState) {
        //console.log("APP ACTION INIT USER", user);
        //var root = user ? 'loggedIN' : 'login';
        //var root = getState().app.root;
        dispatch(changeAppRoot('launch'));
    };
}

export function changeAppRoot(root) {
    return {type: ROOT_CHANGED, root: root};
}

export function login() {
    return function (dispatch, getState) {
        // login logic
        dispatch(changeAppRoot('loggedIn'));
    };
}

export function logout() {
    return function (dispatch, getState) {
        // login logic
        dispatch(changeAppRoot('launch'));
    };
}

