import {ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART, SET_CART_ITEMS} from "../action-types";

const initialState = {
    productsInCart: [],
    cartItems: []
}

const reducer = (state = initialState, action) => {
    switch (action.type){
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
        case SET_CART_ITEMS: {
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