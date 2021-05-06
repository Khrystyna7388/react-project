import {SET_VALUES} from "../services/value-action-types";

const initFromLs = localStorage.getItem('products');

const initialState = initFromLs ? JSON.parse(initFromLs) : {
    products: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_VALUES: {
            return {
                ...state,
                products: action.payload
            }
        }

        default:
            return state;
    }
}

export default reducer;