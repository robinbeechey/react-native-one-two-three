import {
    CHANGE_PRIMARY_COLOR } from '../actions/theme';

const initialState = {
  primaryColor: '#FC447B'
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
      case CHANGE_PRIMARY_COLOR:
          return {
              ...state,
              primaryColor: action.color
          };
      default:
          return state
  }

};

export default themeReducer;