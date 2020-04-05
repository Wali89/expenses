import axios from 'axios';

import { GET_PURCHASES, DELETE_PURCHASE } from './types';

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