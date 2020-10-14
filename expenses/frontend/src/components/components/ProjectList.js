import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Project from './Project';


export default class ProjectList extends Component {
    state = {
        id: null,
        projectDetails: false,
    }

    renderProjects = () => {
        return (this.props.projects.map(project =>
            <li key={project.id}>
                <Link to={`/projects/${project.id}`}>{project.name}</Link>
            </li>
        ));
    }


    selectedProjectHandler = projectId => {
        if (projectId !== null) {
            this.setState({ id: projectId, projectDetails: true })
        }
    };

    renderRedirect = () => {
        if (this.state.projectDetails) {
            return <Redirect to={`/projects/${this.state.id}`} />
        }
    };

    render() {
        const projects = this.props.projects;
        let projectInfo = null;
        if (projects.length > 0) {
            projectInfo = projects.map(project => {
                return (
                    <Project
                        key={project.id}
                        projectId={project.id}
                        name={project.name}
                        goToProjectDetails={this.selectedProjectHandler}>

                    </Project>
                );
            });
        }
        return (
            <div>
                <div>
                    {this.renderRedirect()}
                    {projectInfo}
                </div>

            </div>

        )
    }

}
