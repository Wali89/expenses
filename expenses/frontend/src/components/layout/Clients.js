import React, { Component } from 'react';
import Client from './Client';
import { connect } from 'react-redux';

class Clients extends Component {
    renderSources = () => {
        return (this.props.clients.map((client, index) => <Client key={index} id={client.id} name={client.name} />))
    }

    render() {
        return (
            <div id="">
                <div className="ui list">
                    {this.renderSources()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        client: state.purchases.clients,
    }
}

export default connect(mapStateToProps)(Clients);