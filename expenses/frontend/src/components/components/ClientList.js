import React, { Component } from 'react';
import { connect } from 'react-redux';
import { useRouteMatch, Link } from 'react-router-dom';

class Clients extends Component {


    render() {
        this.renderSources = () => {
            return (this.props.clients.map((client, index) => <Link key={client.id} to={`/clients/${client.id}`} >{client.name}</Link>))
        }

        return (
            <div id="clients">
                <div className="ui list">
                    {this.renderSources()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        clients: state.purchases.clients,
    }
}

export default connect(mapStateToProps)(Clients);
