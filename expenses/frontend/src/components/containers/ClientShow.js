import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProjects } from '../../actions/purchases';
import PropTypes from 'prop-types';

class ClientShow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: []
        }
    }
    static propTypes = {

        getProjects: PropTypes.func.isRequired

    };


    render() {

        return (

            <h1>Hello</h1>
        )
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

export default connect(mapStateToProps, { getProjects })(ClientShow);