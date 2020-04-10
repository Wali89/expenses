import axios from 'axios';

import { GET_PURCHASES, DELETE_PURCHASE, GET_ERRORS } from './types';

// GET PURCHASES

export const getPurchases = () => dispatch => {
    axios.get('/api/purchases/')
        .then(res => {
            dispatch({
                type: GET_PURCHASES,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
};

// DELETE PURCHASE

export const deletePurchase = (id) => dispatch => {
    axios.delete(`/api/purchases/${id}`)
        .then(res => {
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
            dispatch({
                type: ADD_PURCHASE,
                payload: res.data
            });
        })
        .catch(res => {
            const errors = {
                msg: res.response.data,
                status: res.response.status
            };
            dispatch({
                type: GET_ERRORS,
                payload: errors
            });
        })
};  