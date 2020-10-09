import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProjects } from '../../actions/purchases';
import PropTypes from 'prop-types';

class ClientShow extends Component {


    static propTypes = {

        getProjects: PropTypes.func.isRequired

    };

    componentDidMount() {
        this.props.getProjects(this.props.match.params.id);
    }


    render() {
        console.log(this.props.match.params.id)
        return (


            < h1 > Hello { this.props.client.name} </h1 >
        )
    }
}


const mapStateToProps = state => {
    return {
        client: state.purchases.client
    }

}

export default connect(mapStateToProps, { getProjects })(ClientShow);