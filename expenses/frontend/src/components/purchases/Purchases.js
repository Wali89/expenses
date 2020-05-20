import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPurchases, deletePurchase } from '../../actions/purchases';


import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

export class Purchases extends Component {
    constructor() {
        super();
        this.state = {
            search: '',

        }
    }
    static propTypes = {
        purchases: PropTypes.array.isRequired,
        getPurchases: PropTypes.func.isRequired,
        deletePurchase: PropTypes.func.isRequired,

    };


    componentDidMount() {
        this.props.getPurchases();
    }

    updateSearch(event) {
        this.setState({ search: event.target.value });
    }

    handleSelect(e) {
        console.log(e)
    }



    render() {


        let filteredPurchases = this.props.purchases.filter((purchase) => {
            return (purchase.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1) || (purchase.notes.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1);
        })
        return (


            <Fragment>
                <h2>Purchases</h2>

                <input
                    type="text"
                    placeholder='Search'
                    value={this.state.search}
                    onChange={this.updateSearch.bind(this)} />

                <input
                    type="text"
                    placeholder='Start Date'
                    value={this.state.startDate}
                    onChange={this.updateSearch.bind(this)} />

                <input
                    type="text"
                    placeholder='End Date'
                    value={this.state.endDate}
                    onChange={this.updateSearch.bind(this)} />

                <table className="table table-striped">
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Amount</th>
                        <th>Notes</th>
                        <th>Date</th>
                        <th />
                    </thead>
                    <tbody>
                        {filteredPurchases.map(purchase => (
                            <tr key={purchase.id}>
                                <td>{purchase.id}</td>
                                <td>{purchase.name}</td>
                                <td>{purchase.amount}</td>
                                <td>{purchase.notes}</td>
                                <td>{purchase.purchase_date}</td>
                                <td><button onClick={this.props.deletePurchase.bind(this, purchase.id)} className="btn btn-danger btn-sm">{" "} Delete</button></td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </Fragment >
        )
    }
}

const mapStateToProps = state => ({
    purchases: state.purchases.purchases,
    search: state.search.search,
    startDate: state.search.startDate,
    endDate: state.search.endDate
});

export default connect(mapStateToProps, { getPurchases, deletePurchase })(Purchases);
