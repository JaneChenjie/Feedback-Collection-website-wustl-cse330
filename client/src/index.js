import 'materialize-css/dist/css/materialize.min.css'
import React from 'react';
// import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createRoot } from "react-dom/client";
import reduxThunk from 'redux-thunk'
import reducers from './reducers';

import App from './components/App';
import axios from 'axios';
window.axios = axios;
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

const root = createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}><App /></Provider>
    
);
