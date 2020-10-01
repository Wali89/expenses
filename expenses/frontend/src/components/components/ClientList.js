import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Client from './Client';
import Card from './Card'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export default class ClientsList extends Component {
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
                    <Card
                        key={client.id}
                        clientId={client.id}
                        goToClientDetails={this.selectedClientHandler}
                    >
                        <Client
                            title={client.name}


                        />
                    </Card>
                );
            });
        }
        return (
            <div>
                <div className="ui list">
                    {this.renderClients()}
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        clients: state.purchases.clients,
    }
}
export default connect(mapStateToProps)(ClientsList); 