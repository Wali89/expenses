import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class ClientsList extends Component {
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