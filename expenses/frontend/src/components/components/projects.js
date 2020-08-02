import React, { Component } from 'react';
import Project from './project';
import { connect } from 'react-redux';

class Projects extends Component {


    render() {
        this.renderSources = () => {
            return (this.props.projects.map((project, index) => <Project key={index} id={project.id} name={project.name} />))
        }
        return (
            <div id="projects">
                <div className="ui list">
                    {this.renderSources()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        projects: state.purchases.projects,
    }
}

export default connect(mapStateToProps)(Projects);
