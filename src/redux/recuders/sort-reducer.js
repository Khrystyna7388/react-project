import {SET_SORT_PRODUCTS} from "../action-types/sort-action-types";

const initialState = {
    sortProducts: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SORT_PRODUCTS: {
            return {
                ...state,
                sortProducts: action.payload
            }
        }
        default:
            return state;
    }
}

export default reducer;