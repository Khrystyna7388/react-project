import {ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART} from "../action-types";
import {SET_VALUES} from "../services/value-action-types";

const initFromLs = localStorage.getItem('cart');

const initialState = initFromLs ? JSON.parse(initFromLs) : {
    productsInCart: [],
    cartItems: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_TO_CART: {
            return {
                ...state,
                productsInCart: [...state.productsInCart, action.payload]
            }
        }
        case REMOVE_PRODUCT_FROM_CART: {
            return {
                ...state,
                productsInCart: state.productsInCart.filter(el => action.payload !== el)
            }
        }
        case SET_VALUES: {
            return {
                ...state,
                cartItems: action.payload
            }
        }
        default:
            return state;
    }
}

export default reducer;