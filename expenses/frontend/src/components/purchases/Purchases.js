import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPurchases, deletePurchase } from '../../actions/purchases';


export class Purchases extends Component {
    constructor() {
        super();
        this.state = {
            search: '',
            startDate: '2020-01-01',
            endDate: '2021-01-20',
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

    updateStartDate(event) {
        this.setState({ startDate: event.target.value });
        console.log(this.state.startDate)
    }

    updateEndDate(event) {
        this.setState({ endDate: event.target.value });
    }

    handleSelect(e) {
        console.log(e)
    }



    render() {


        let filteredPurchases = this.props.purchases.filter((purchase) => {
            return ((purchase.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1) || (purchase.notes.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1)) && ((purchase.purchase_date >= this.state.startDate) && (purchase.purchase_date <= this.state.endDate));
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
                    type="date"
                    placeholder='Start Date'
                    value={'2020-01-01'}
                    onChange={this.updateStartDate.bind(this)} />

                <input
                    type="date"
                    placeholder='End Date'
                    value={'2022-01-01'}
                    onChange={this.updateEndDate.bind(this)} />

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
    search: state.search.search
});

export default connect(mapStateToProps, { getPurchases, deletePurchase })(Purchases);
