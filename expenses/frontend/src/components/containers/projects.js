import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProjects } from '../../actions/purchases';


class Projects extends Component {
    constructor() {
        super();
        this.state = {
            clients: [],
            projects: []
        }
    }
    static propTypes = {
        getProjects: PropTypes.func.isRequired

    }

    componentDidMount() {
        this.props.getProjects(this.props.match.params.id, this.state.page);
    }


    render() {
        let projects = this.props.projects

        return (
            <Fragment>
                <h1></h1>
                <table className="table table-striped">
                    <thead>
                        <th>ID</th>
                        <th>Name</th>

                        <th />
                    </thead>
                    <tbody>
                        {projects.map(client => (
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
    projects: state.purchases.projects
});

export default connect(mapStateToProps, { getProjects })(Projects);

