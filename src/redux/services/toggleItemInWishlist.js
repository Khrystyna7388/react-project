import {addProductToWishlist, removeProductFromWishlist} from "../action-creators";

export const toggleItemInWishlist = (id) => (dispatch, getState) => {
    const {wishlist: {productsInWishlist}} = getState();

    const alreadyExist = !!productsInWishlist.find(el => el === id);

    dispatch(alreadyExist ? removeProductFromWishlist(id) : addProductToWishlist(id))
}