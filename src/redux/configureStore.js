import { createStore, applyMiddleware, combineReducers } from 'redux';
import { default as thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import update from 'react-addons-update';

import {
    IS_LOADING,
    USER_AUTHENTICATED,
    SHOW_ALERT
} from './actions';

const initialState = {
    currentUser: null,
    terminals: [],
    shouldShowAlert: false,
    alertMessage: ""
};

function currentUser(state = null, action) {
    switch (action.type) {
        case USER_AUTHENTICATED:
            return action.user;
        default:
            return state;
    }
}

function terminals(state = [], action) {
    switch (action.type) {
        default:
            return state;
    }
}

function shouldShowAlert(state = false, action) {
    switch (action.type) {
        case SHOW_ALERT:
            return action.status
        default:
            return state;
    }
}

function alertMessage(state = false, action) {
    switch (action.type) {
        case SHOW_ALERT:
            return action.message
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    currentUser,
    terminals,
    shouldShowAlert,
    alertMessage
})

export default function configureStore(hydratedState = {}) {
    const store = createStore(
        rootReducer, 
        {...initialState, ...hydratedState},
        composeWithDevTools (
            applyMiddleware(thunk)
        )
    );
    return store;
}