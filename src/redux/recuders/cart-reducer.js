import {ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART, SET_LIST_OF_CART} from "../action-types";

const initialState = {
    productsInCart: [],
    listOfCart: []
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
        case SET_LIST_OF_CART: {
            return {
                ...state,
                listOfCart: action.payload
            }
        }
        default:
            return state;
    }
}

export default reducer;