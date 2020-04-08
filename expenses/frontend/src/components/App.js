import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';

import { positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Header from './layout/Header';
import Dashboard from './purchases/Dashboard';
import Alerts from './layout/Alerts';

import { Provider } from 'react-redux';
import store from '../store';

// Alert Options
const alertOptions = {
    timeout: 3000,
    position: positions.TOP_CENTER
}


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Fragment>
                        <Header />
                        <Alerts />
                        <div className="container">
                            <Dashboard />

                        </div>

                    </Fragment>
                </AlertProvider>
            </Provider>

        )
    }
}


ReactDom.render(<App />, document.getElementById('app'));