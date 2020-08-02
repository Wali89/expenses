import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProjects } from '../../actions/purchases';
import Projects from '../components/projects';

class ProjectsContainer extends Component {
    constructor() {
        super();

    }
    static propTypes = {
        getProjects: PropTypes.func.isRequired,
        projects: PropTypes.func.isRequired

    }

    componentDidMount() {
        this.props.getProjects(this.props.match.params.id, this.state.page);
    }


    render() {


        return (
            <div>
                <Projects projects={this.props.projects} />
            </div>
        )
    }

}
const mapStateToProps = state => ({
    projects: state.purchases.projects
});

export default connect(mapStateToProps, { getProjects })(ProjectsContainer);

