import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPurchases, deletePurchase } from '../../actions/purchases';

export class Purchases extends Component {
    static propTypes = {
        purchases: PropTypes.array.isRequired,
        getPurchases: PropTypes.func.isRequired,
        deletePurchase: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getPurchases();
    }

    componentDidUpdate() {
        this.props.getPurchases();
    }

    render() {
        return (
            <Fragment>
                <h2>Purchases</h2>
                <table className="table table-striped">
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th />
                    </thead>
                    <tbody>
                        {this.props.purchases.map(purchase => (
                            <tr key={purchase.id}>
                                <td>{purchase.id}</td>
                                <td>{purchase.name}</td>
                                <td>{purchase.amount}</td>
                                <td>{purchase.purchase_date}</td>
                                <td><button onClick={this.props.deletePurchase.bind(this, purchase.id)} className="btn btn-danger btn-sm">{" "} Delete</button></td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    purchases: state.purchases.purchases
});

export default connect(mapStateToProps, { getPurchases, deletePurchase })(Purchases);
