import React from 'react';
import { connect } from 'react-redux';
import useParams from "react-router-dom"

class ClientShow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: []
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    const client = state.purchases.clients.filter(client => client.id == ownProps.match.params.clientId)
    if (client) {

        return { client }
    } else {

        return { client: {} }
    }
}

export default connect(mapStateToProps)(ClientShow);