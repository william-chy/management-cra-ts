import React from 'react';
import './App.css';

import { Index } from './views/index';
import { Login } from './views/login';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

function App() {
    return (
        <Router basename="/">
            <Switch>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/404">
                    <NoMatch />
                </Route>
                <Route path="/">
                    <Index />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;

function NoMatch() {
    return (
        <div>
            <h2>404</h2>
        </div>
    );
}
