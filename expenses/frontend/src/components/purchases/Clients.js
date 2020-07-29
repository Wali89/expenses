import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getClients } from '../../actions/purchases';
import Clients from '../layout/Clients'


export class ClientsContainer extends Component {
    constructor() {
        super();
        this.state = {
            clients: []
        }
    }
    static propTypes = {
        getClients: PropTypes.func.isRequired

    }

    componentDidMount() {
        this.props.getClients();
    }


    render() {

        return (
            <div> <Clients /> </div>
        )
    }

}
const mapStateToProps = state => ({
    clients: state.purchases.clients,

});

export default connect(mapStateToProps, { getClients })(ClientsContainer);