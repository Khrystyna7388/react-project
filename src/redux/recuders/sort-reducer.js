import {SET_VALUES} from "../services/value-action-types";

const initialState = {
    sortProductsList: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_VALUES: {
            return {
                ...state,
                sortProductsList: action.payload
            }
        }
        default:
            return state;
    }
}

export default reducer;