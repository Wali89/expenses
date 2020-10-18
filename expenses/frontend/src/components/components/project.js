import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Project.scss'


const Project = props => (
    <>
        <div
            className="card-component"
            style={props.style || null}
            onClick={() => props.goToProjectDetails(props.projectId)}

        >
            <h3>{props.name}</h3>
        </div>


    </>
)

export default Project;