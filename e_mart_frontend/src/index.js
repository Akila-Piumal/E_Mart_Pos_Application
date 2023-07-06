import React from "react";
import {BrowserRouter as Router} from 'react-router-dom'

import { createRoot } from 'react-dom';

import App from './App';
import './index.css'

createRoot(
    document.getElementById('root')
).render(
    <Router>
        <App/>
    </Router>
);

