export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const REGISTER = 'REGISTER';

export function login() {
  return function(dispatch, getState) {
    //dispatch(login());
  };
}

export function register(user){
  return function(dispatch, getState){
    dispatch(registerUser(user));
  }
}

function registerUser(user){

  return {type: REGISTER, payload: user}
}
