import { GET_PURCHASES, DELETE_PURCHASE, ADD_PURCHASE, GET_CLIENTS } from "../actions/types.js"

const initialState = {
    purchases: [],
    clients: [],
    projects: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PURCHASES:
            return {
                ...state,
                purchases: action.payload
            };

        case DELETE_PURCHASE:
            return {
                ...state,
                purchases: state.purchases.filter(purchase => purchase.id !== action.payload)
            };

        case ADD_PURCHASE:
            return {
                ...state,
                purchases: [...state.purchases, action.payload]
            };

        case GET_CLIENTS:
            return {
                ...state,
                clients: action.payload
            };

        case GET_PURCHASES:
            return {
                ...state,
                projects: action.payload
            }
        default:
            return state;
    }

}