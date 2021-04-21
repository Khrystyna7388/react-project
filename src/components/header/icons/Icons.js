import React from "react";
import './Icons.css';
import {CART_ALT, CART_URL, WISHLIST_ALT, WISHLIST_URL} from "../types";
import {useSelector} from "react-redux";

export const Icons = () => {
    const {productsInCart, productsInWishlist} =
        useSelector(({cart: {productsInCart}, wishlist: {productsInWishlist}}) => ({
            productsInCart,
            productsInWishlist
        }))

    return(
        <div className="icons">
            <img className="cart-image"
                 src={CART_URL} alt={CART_ALT}/>
            <span>{productsInCart.length}</span>

            <img className="wishlist-image"
                 src={WISHLIST_URL} alt={WISHLIST_ALT}/>
            <span>{productsInWishlist.length}</span>
        </div>
    )
}