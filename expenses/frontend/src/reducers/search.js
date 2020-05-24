import { SEARCH } from "../actions/types.js";
import { addDays } from 'date-fns';

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
                selectionRange
            }

        default:
            return state;

    }
}