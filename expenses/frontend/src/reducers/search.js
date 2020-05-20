import { SEARCH } from "../actions/types.js";
import { addDays } from 'date-fns';

const initialState = {
    purchases: [],
    focusedInput: null,
    search: '',
    startDate: new Date(),
    endDate: addDays(new Date(), 7),
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