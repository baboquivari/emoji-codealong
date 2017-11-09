import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';

// we are telling ReactDOM to inject the App component into a 'root' div inside the HTML 
ReactDOM.render(
    <App />, 
    document.getElementById('root')
);