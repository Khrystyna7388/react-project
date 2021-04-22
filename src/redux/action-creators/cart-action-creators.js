import {ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART, SET_CART_ITEMS} from "../action-types";
import {URL} from "./url";
import {setIsLoading} from "./loading-action-creators";

const addProductToCart = (id) => ({type: ADD_PRODUCT_TO_CART, payload: id});
const removeProductFromCart = (id) => ({type: REMOVE_PRODUCT_FROM_CART, payload: id});
const setCartItems = (payload) => ({type: SET_CART_ITEMS, payload})

const toggleItemInCart = (id) => (dispatch, getState) => {
    const {cart: {productsInCart}} = getState();

    const alreadyExist = !!productsInCart.find(el => el === id);

    dispatch(alreadyExist ? removeProductFromCart(id) : addProductToCart(id))
}

const fetchCartItems = () => async (dispatch) => {
    try {
        dispatch(setIsLoading(true));
        const response = await fetch(URL);
        const data = await response.json();
        dispatch(setCartItems(data));
    } catch (e) {
        console.error(e)
    } finally {
        dispatch(setIsLoading(false));
    }
}

export {
    addProductToCart,
    removeProductFromCart,
    toggleItemInCart,
    setCartItems,
    fetchCartItems
}