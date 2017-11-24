import { combineReducers } from 'redux';
import theme from './themes';
import auth from './auth';

export default combineReducers({
   theme,
   auth
});