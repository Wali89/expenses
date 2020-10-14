import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getProjects } from '../../actions/purchases';
import PropTypes from 'prop-types';
import ProjectList from '../components/ProjectList'

class ClientShow extends Component {


    static propTypes = {

        getProjects: PropTypes.func.isRequired

    };

    componentDidMount() {
        this.props.getProjects(this.props.match.params.id);
    }


    render() {
        let projects = this.props.client.projects
        let projectsRender;
        if (projects) {
            projectsRender = projects.map((project, i) => {


                <li>{project[i]}</li>

            })
        }
        console.log(projectsRender)
        return (

            <div>
                < h1 > Projects for {this.props.client.name} </h1 >
                <ProjectList projects={this.props.projects} />
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        client: state.purchases.client
    }

}

export default connect(mapStateToProps, { getProjects })(ClientShow);