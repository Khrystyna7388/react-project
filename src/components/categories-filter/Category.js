import React from "react";
import {useDispatch, useSelector} from "react-redux";

export const Category = ({product}) => {
    const {productsInCart, productsInWishlist} =
        useSelector(({cart: {productsInCart}, wishlist: {productsInWishlist}}) => ({
            productsInCart,
            productsInWishlist
        }))

    const dispatch = useDispatch();

    return(
        <div>

        </div>
    )
}