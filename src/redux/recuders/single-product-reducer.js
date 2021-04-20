import {SET_SINGLE_PRODUCT} from "../action-types/single-product-types";

const initialState = {
    singleProduct: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SINGLE_PRODUCT: {
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