import {addProductToCart, removeProductFromCart} from "../action-creators";

export const toggleItemInCart = (id) => (dispatch, getState) => {
    const {cart: {productsInCart}} = getState();

    const alreadyExist = !!productsInCart.find(el => el === id);

    dispatch(alreadyExist ? removeProductFromCart(id) : addProductToCart(id))
}