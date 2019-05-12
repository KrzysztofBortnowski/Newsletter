import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import App from './App.js';
import Router from './Router'

const myState = {
    count: 0,
    email: ''
}

const reducer = (state = myState, action) => {
switch(action.type) {
case 'INCREMENT':
return state = {...state, count: state.count + 1};
case 'DECREMENT':
return state = {...state, count: state.count - 1};
case 'ADD_EMAIL':
return state = {...state, email: action.email}
default:
return state;
}
};

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
render(
<Provider store={store}>
<Router />
</Provider>,
document.getElementById('root')
);
