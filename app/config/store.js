import { createStore, applyMiddleware } from 'redux';
import createSageMiddleware from 'redux-saga';
import {logger} from 'redux-logger';
import thunk from "redux-thunk";

import reducer from '../reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSageMiddleware();
const middleware = [sagaMiddleware, thunk];


if (process.env.NODE_ENV === 'development') {
    middleware.push(logger);
}

const store = createStore(reducer, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

export default store;