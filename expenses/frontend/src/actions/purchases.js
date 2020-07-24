import axios from 'axios';
import { createMessage, returnErrors } from './messages'
import { tokenConfig } from './auth'

import { GET_PURCHASES, DELETE_PURCHASE, GET_ERRORS, ADD_PURCHASE, SEARCH, GET_CLIENTS } from './types';

// GET PURCHASES

export const getPurchases = () => (dispatch, getState) => {
    axios
        .get('/api/purchases/', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_PURCHASES,
                payload: res.data
            });
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
};

// DELETE PURCHASE

export const deletePurchase = (id) => (dispatch, getState) => {
    axios.delete(`/api/purchases/${id}`, tokenConfig(getState))
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

export const addPurchase = purchase => (dispatch, getState) => {
    axios
        .post('/api/purchases/', purchase, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ purchaseAdded: 'Purchase Added' }))
            dispatch({
                type: ADD_PURCHASE,
                payload: res.data
            });
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
};


export const getClients = () => (dispatch, getState) => {
    axios
        .get('/api/clients/', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_CLIENTS,
                payload: res.data
            });
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
};


export const getProjects = () => (dispatch, getState) => {
    axios
        .get('/api/projects/', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_PROJECTS,
                payload: res.data
            });
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
};