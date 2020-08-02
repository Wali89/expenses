import React, { Component } from 'react';
import Client from './client';
import { connect } from 'react-redux';

class Clients extends Component {


    render() {
        this.renderSources = () => {
            return (this.props.clients.map((client, index) => <Client key={index} id={client.id} name={client.name} />))
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
