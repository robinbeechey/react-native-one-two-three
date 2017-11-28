import { combineReducers } from 'redux';
import theme from './themes';
import auth from './auth';
import app from './app';

export default combineReducers({
   theme,
   auth,
   app
});