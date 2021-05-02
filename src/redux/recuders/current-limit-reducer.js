import {SET_CURRENT_LIMIT} from "../action-types";

export const LIMIT_STEP = 6;

const initialState = {
    currentLimit: LIMIT_STEP
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_LIMIT: {
            return {
                ...state,
                currentLimit: action.payload
            }
        }
        default:
            return state

    }
}

export default reducer;