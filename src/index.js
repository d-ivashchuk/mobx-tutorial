import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


//Why arrow functions are not working in this case? Scope problem? Shall we use conventional function (){} declaration when working with mobX?
// appState.increment = () => {
//     this.count++;
// }
// appState.decrement = () => {
//     this.count--;
// }
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
