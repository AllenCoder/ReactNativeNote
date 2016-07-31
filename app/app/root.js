'use strict'
import React from 'react';
import {Provider} from 'react-redux';
import App from './app';
//import configureStore from './store/configure-store';
//const store =configureStore();
export default class Root extends React.Component{
    render(){
        return (
            <Provider >
            <App />
            </Provider>
        )
    }
}