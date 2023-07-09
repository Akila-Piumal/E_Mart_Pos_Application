import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import { createRoot } from 'react-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App';
import './index.css';

// import { Provider } from "react";
// import {reducers} from './redux/reducers'
// import thunk from 'redux-thunk';
// import { createStore, applyMiddleware, compose } from "redux";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
// const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(thunk)))

createRoot(
    document.getElementById('root')
).render(
    
        <Router>
            <GoogleOAuthProvider clientId="1019589682321-oaad64ues5m8t9vvuo68kdcqlopj4m4a.apps.googleusercontent.com">
                <App/>
            </GoogleOAuthProvider>;
        </Router>

    
);

