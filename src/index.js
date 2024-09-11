// index.js

import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for React 18+
// import * as serviceWorker from './serviceWorker';

import "bootstrap/dist/css/bootstrap.min.css";
import Cards from './Cards/Cards'; // Correct import for Cards component

const root = ReactDOM.createRoot(document.getElementById('root')); // Updated for React 18+
root.render(<Cards />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();