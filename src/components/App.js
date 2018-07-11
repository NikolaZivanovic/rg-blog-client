/* eslint-disable import/no-named-as-default */
import { Route, Switch } from "react-router-dom";

import HomePage from "./HomePage";
import NotFoundPage from "./NotFoundPage";
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";
import Header from "./common/Header";
import Posts from "./Posts/Posts";

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/posts/:postId" component={Posts}/>
                <Route path="/posts" component={Posts}/>
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
