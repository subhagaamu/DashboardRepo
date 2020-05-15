import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom';
import {Provider} from 'react-redux';
import DashboardComponent from './Components/DashboardComponent'
import store from './Store/DashboardStore'

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <h4 style={{textAlign:"center"}}>Welcome to the Employee Dashboard</h4>
    <BrowserRouter>
    <Route exact path="/" component={App}></Route>
    <Route  path="/Dashboard" component={DashboardComponent}></Route>
    </BrowserRouter>
  </React.StrictMode></Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
