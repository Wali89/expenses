import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Clients extends Component {
    constructor() {
        super();
        this.state = {
            search: '',
            startDate: '',
            endDate: ''
        }
    }
}