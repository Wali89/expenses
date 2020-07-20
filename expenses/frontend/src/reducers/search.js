import { SEARCH } from "../actions/types.js";


const initialState = {
    purchases: [],
    search: '',
    startDate: '',
    endDate: ''

};

export default function (state = initialState, action) {
    switch (action.type) {
        case SEARCH:
            return {
                ...state,
                search,
                startDate: '',
                endDate: ''

            }

        default:
            return state;

    }
}