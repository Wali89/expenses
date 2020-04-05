import { GET_PURCHASES, DELETE_PURCHASE } from "../actions/types.js"

const initialState = {
    purchases: []
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

        default:
            return state;
    }

}