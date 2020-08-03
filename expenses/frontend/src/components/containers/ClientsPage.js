import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getClients } from '../../actions/purchases';
import PropTypes from 'prop-types';
import ClientList from '../components/ClientList';
import { Route, Switch } from 'react-router-dom';
import ClientShow from './ClientShow'


class ClientsContainer extends Component {

    constructor() {
        super();

    }

    static propTypes = {
        clients: PropTypes.array.isRequired,
        getClients: PropTypes.func.isRequired

    };

    componentDidMount() {
        this.props.getClients();
    }


    render() {

        return (
            <div>
                <ClientList clients={this.props.clients} />
                <Switch>
                    <Route path={`${this.props.match.url}/:clientId`} component={ClientShow} />
                    <Route exact path={match.url} render={() => (
                        <h3>Please select a client from the list.</h3>
                    )} />
                </Switch>
            </div>

        )
    }
}


const mapStateToProps = state => ({
    clients: state.purchases.clients


})


export default connect(mapStateToProps, { getClients })(ClientsContainer)