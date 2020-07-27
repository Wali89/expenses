import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getClients } from '../../actions/purchases';

export class Clients extends Component {
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
        let clients = this.props.clients

        return (
            <Fragment>

                <table className="table table-striped">
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Projects</th>
                    </thead>
                    <tbody>
                        {clients.map(client => (
                            <tr key={client.id}>
                                <td>{client.id}</td>
                                <td>{client.name}</td>
                                <td>{client.projects.length}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </Fragment>
        )
    }

}
const mapStateToProps = state => ({
    clients: state.purchases.clients,

});

export default connect(mapStateToProps, { getClients })(Clients);