import axios from 'axios';
import { createMessage, returnErrors } from './messages'

import { GET_PURCHASES, DELETE_PURCHASE, GET_ERRORS, ADD_PURCHASE } from './types';

// GET PURCHASES

export const getPurchases = () => dispatch => {
    axios.get('/api/purchases/')
        .then(res => {
            dispatch({
                type: GET_PURCHASES,
                payload: res.data
            });
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
};

// DELETE PURCHASE

export const deletePurchase = (id) => dispatch => {
    axios.delete(`/api/purchases/${id}`)
        .then(res => {
            dispatch(createMessage({ deletePurchase: 'Purchase Deleted' }))
            dispatch({
                type: DELETE_PURCHASE,
                payload: id
            });
        })
        .catch(err => console.log(err));
};

// ADD PURCHASE

export const addPurchase = purchase => dispatch => {
    axios
        .post('/api/purchases/', purchase)
        .then(res => {
            dispatch(createMessage({ purchaseAdded: 'Purchase Added' }))
            dispatch({
                type: ADD_PURCHASE,
                payload: res.data
            });
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
};  