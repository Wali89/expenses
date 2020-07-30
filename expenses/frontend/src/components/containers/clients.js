import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getClients } from '../../actions/purchases';
import Clients from '../components/Clients';


class ClientsContainer extends Component {
    componentDidMount() {
        this.props.getClients();
    }


    render() {

        return (
            <div>
                <Clients />
            </div>

        )
    }
}


const mapStateToProps = state => ({
    clients: state.purchases.clients


})


export default connect(mapStateToProps, { getClients })(ClientsContainer)