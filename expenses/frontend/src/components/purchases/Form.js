import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { addPurchase } from '../../actions/purchases'


export class Form extends Component {
    state = {
        name: '',
        amount: '',
        purchase_date: ''
    }

    static propTypes = {
        addPurchase: PropTypes.func.isRequired
    }
    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const { name, amount, purchase_date } = this.state;
        const purchase = { name, amount, purchase_date };
        this.props.addPurchase(purchase);
        this.setState({
            name: '',
            amount: '',
            purchase_date: ''

        })
    }
    render() {
        const { name, amount, purchase_date } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Add Purchase</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            onChange={this.onChange}
                            value={name}
                        />
                    </div>
                    <div className="form-group">
                        <label>Amount</label>
                        <input
                            className="form-control"
                            type="integer"
                            name="amount"
                            onChange={this.onChange}
                            value={amount}
                        />
                    </div>
                    <div className="form-group">
                        <label>Date (YYYY-MM-DD)</label>
                        <input
                            className="form-control"
                            type="datetime"
                            name="purchase_date"
                            onChange={this.onChange}
                            value={purchase_date}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(null, { addPurchase })(Form);
