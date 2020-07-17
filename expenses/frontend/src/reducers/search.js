import { SEARCH } from "../actions/types.js";


const initialState = {
    purchases: [],
    search: ''
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SEARCH:
            return {
                ...state,
                search,

            }

        default:
            return state;

    }
}