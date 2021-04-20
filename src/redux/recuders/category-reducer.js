import {SET_CATEGORY} from "../action-types/category-action-types";

const initialState = {
    category: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORY:
            return {
                ...state,
                category: action.payload
            }
        default:
            return state
    }
}

export default reducer;