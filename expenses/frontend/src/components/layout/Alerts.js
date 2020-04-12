import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Alerts extends Component {

    static propTypes = {
        error: PropTypes.object.isRequired
    }
    componentDidUpdate(prevProps) {
        const { error, alert } = this.props;
        if (error !== prevProps.error) {
            if (error.msg.name) alert.error(`Name: ${error.msg.name.join()}`);
            if (error.msg.amount) alert.error(`Amount: ${error.msg.amount.join()}`)
            if (error.msg.purchase_date) alert.error(`Purchase Date: ${error.msg.purchase_date.join()}`)
            if (error.msg.note) alert.error(`note: ${error.msg.note.join()}`)
        } else {
            alert.succces()
        }
    }
    render() {

        return <Fragment />;

    }

}

const mapStateToProps = state => ({
    error: state.errors
})
export default connect(mapStateToProps)(withAlert()(Alerts));