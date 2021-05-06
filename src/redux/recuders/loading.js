import {SET_IS_LOADING} from "../action-types";

const initialState = {
    isLoading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_LOADING: {
            return {
                ...state,
                isLoading: action.payload
            }
        }
        default:
            return state
    }
}

export default reducer;