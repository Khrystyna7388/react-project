import {ADD_PRODUCT_TO_WISHLIST, REMOVE_PRODUCT_FROM_WISHLIST, SET_LIST_OF_WISHLIST} from "../action-types";

const initialState = {
    productsInWishlist: [],
    listOfWishlist: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_TO_WISHLIST: {
            return {
                ...state,
                productsInWishlist: [...state.productsInWishlist, action.payload]
            }
        }
        case REMOVE_PRODUCT_FROM_WISHLIST: {
            return {
                ...state,
                productsInWishlist: state.productsInWishlist.filter(el => action.payload !== el)
            }
        }
        case SET_LIST_OF_WISHLIST: {
            return {
                ...state,
                listOfWishlist: action.payload
            }
        }
        default:
            return state
    }
}

export default reducer;