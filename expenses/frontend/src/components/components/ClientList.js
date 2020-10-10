import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Client from './Client'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './ClientList.scss'

export default class ClientList extends Component {
    state = {
        id: null,
        clientDetails: false,
    }
    renderClients = () => {
        return (this.props.clients.map(client =>
            <li key={client.id}>
                <Link to={`/clients/${client.id}`}>{client.name}</Link>
            </li>
        ));
    }

    selectedClientHandler = clientId => {
        if (clientId !== null) {
            this.setState({ id: clientId, clientDetails: true });
        }
    }

    renderRedirect = () => {
        if (this.state.clientDetails) {
            return <Redirect to={`/clients/${this.state.id}`} />;
        }
    };

    render() {
        const clients = this.props.clients;
        let clientInfo = null;
        if (clients.length > 0) {
            clientInfo = clients.map(client => {
                return (
                    <Client
                        key={client.id}
                        clientId={client.id}
                        name={client.name}
                        goToClientDetails={this.selectedClientHandler}
                    >
                    </Client>
                );
            });
        }
        return (
            <div>
                <div className="client-list">
                    {this.renderRedirect()}
                    {clientInfo}
                </div>
            </div>
        );
    }
};

