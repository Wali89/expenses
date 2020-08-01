import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getClients } from '../../actions/purchases';
import PropTypes from 'prop-types';
import Clients from '../components/Clients';


class ClientsContainer extends Component {

    constructor() {
        super();

    }

    static propTypes = {
        clients: PropTypes.array.isRequired,
        getClients: PropTypes.func.isRequired

    };

    componentDidMount() {
        this.props.getClients();
    }


    render() {

        return (
            <div>
                <Clients clients={this.props.clients} />
            </div>

        )
    }
}


const mapStateToProps = state => ({
    clients: state.purchases.clients


})


export default connect(mapStateToProps, { getClients })(ClientsContainer)