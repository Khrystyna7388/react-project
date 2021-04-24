import {SET_VALUES} from "../services/value-action-types";

const initialState = {
    singleProduct: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_VALUES: {
            return {
                ...state,
                singleProduct: action.payload
            }
        }
        default:
            return state
    }
}

export default reducer;