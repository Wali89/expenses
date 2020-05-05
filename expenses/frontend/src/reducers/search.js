import { SEARCH } from "../actions/types.js";

const initialState = {
    purchases: [],
    search: '',
    selectionRange: '',
    startDate: new Date(),
    endDate: null,
    key: 'selection'
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SEARCH:
            return {
                ...state,
                search,
                selectionRange
            }

        default:
            return state;

    }
}