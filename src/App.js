import React from 'react';

import './App.css';
import Home from './Component/Home/Home';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import NotFound from './Component/NotFound/NotFound';
import PostDetails from './Component/PostDetails/PostDetails';
import Comment from './Component/Comment/Comment';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/home">
                    <Home/>
                </Route>
                <Route exact="exact" path="/">
                    <Home/>
                </Route>
                <Route path="/:userId">
                  <PostDetails/>
                </Route>
                <Route paths="/:postId">
                    <Comment/>
                </Route>
                <Route path="*">
                  <NotFound/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
