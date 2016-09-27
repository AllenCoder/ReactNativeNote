/**
 * Created by allen on 16/7/24.
 */
'use strict';
import {createStore ,applyMiddleware} from 'redux';

import thunk from 'redux-thunk';

const middlewares =[thunk];

if (process.env.NODE_ENV==='development'){
    const createLogger =require('redux-logger');
    const logger = createLogger();
    middlewares.push(logger);
}
const createStoreWithMiddleware =applyMiddleware(...middlewares)(createStore);
export default function  configureStore(initialState){
    const store = createStoreWithMiddleware(rootReducer,initialState);
    return store;
}