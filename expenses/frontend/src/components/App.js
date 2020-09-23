import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import { positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Header from './components/header';
import Dashboard from './containers/dashboard';
import ErrorBoundary from './containers/dashboard';
import ClientsContainer from './containers/ClientsPage';
import ProjectsContainer from './containers/projects';
import Alerts from './components/alerts';
import Login from './accounts/Login';
import Register from './accounts/Register';
import PrivateRoute from "./common/PrivateRoute"

import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth'
import ClientShow from './containers/ClientShow';

// Alert Options
const alertOptions = {
    timeout: 3000,
    position: positions.TOP_CENTER
}


class App extends Component {

    componentDidMount() {
        store.dispatch(loadUser())
    }

    render() {
        const { match } = this.props
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Router>
                        <Fragment>
                            <Header />
                            <Alerts />
                            <div className="container">

                                <Switch>
                                    <PrivateRoute exact path="/" component={Dashboard} />
                                    <Route exact path="/register" component={Register} />
                                    <Route exact path="/login" component={Login} />

                                    <PrivateRoute exact path="/clients" component={ClientsContainer} />
                                    <Route path={`${match.url}/:clientId`} component={ClientShow} />
                                </Switch>
                            </div>

                        </Fragment>
                    </Router>
                </AlertProvider>
            </Provider>

        )
    }
}


ReactDom.render(<App />, document.getElementById('app'));