import React from 'react';
import { connect } from 'react-redux';

const ClientShow = ({ client }) => {

    <div>
        <h3>{client.name}</h3>

    </div>
}

const mapStateToProps = (state, ownProps) => {
    const client = state.purchases.clients.find(client => client.id === ownProps.match.params.clientId)
    if (client) {
        console.log(ownProps)
        return { client }
    } else {
        console.log(ownProps)
        return { client: {} }
    }
}

export default connect(mapStateToProps)(ClientShow);