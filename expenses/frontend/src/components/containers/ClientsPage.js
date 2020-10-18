import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getClients } from '../../actions/purchases';
import PropTypes from 'prop-types';
import ClientList from '../components/ClientList';
import { Route, Switch } from 'react-router-dom';
import ClientShow from './ClientShow'


class ClientsPage extends Component {


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
                <h3>Please select a client from the list.</h3>
                <ClientList clients={this.props.clients} />



            </div>

        )
    }
}


const mapStateToProps = state => {
    return {
        clients: state.purchases.clients
    }

}


export default connect(mapStateToProps, { getClients })(ClientsPage)