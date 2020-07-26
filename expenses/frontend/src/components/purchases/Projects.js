import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProjects } from '../../actions/purchases';

export class Projects extends Component {
    constructor() {
        super();
        this.state = {
            projects: []
        }
    }
    static propTypes = {
        getProjects: PropTypes.func.isRequired

    }

    componentDidMount() {
        this.props.getProjects();
    }


    render() {
        let clients = this.props.clients

        return (
            <Fragment>

                <table className="table table-striped">
                    <thead>
                        <th>ID</th>
                        <th>Name</th>

                        <th />
                    </thead>
                    <tbody>
                        {clients.map(client => (
                            <tr key={client.id}>
                                <td>{client.id}</td>
                                <td>{client.name}</td>
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