import {ADD_PRODUCT_TO_WISHLIST, REMOVE_PRODUCT_FROM_WISHLIST, SET_WISHLIST_ITEMS} from "../action-types";
import {SET_VALUES} from "../services/value-action-types";

const initialState = {
    productsInWishlist: [],
    wishlistItems: []
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
        case SET_VALUES: {
            return {
                ...state,
                wishlistItems: action.payload
            }
        }
        default:
            return state
    }
}

export default reducer;