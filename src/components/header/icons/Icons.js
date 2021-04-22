import React from "react";
import './Icons.css';
import {CART_ALT, CART_URL, WISHLIST_ALT, WISHLIST_URL} from "../types";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

export const Icons = () => {
    const {productsInCart, productsInWishlist} =
        useSelector(({cart: {productsInCart}, wishlist: {productsInWishlist}}) => ({
            productsInCart,
            productsInWishlist
        }))
    const history = useHistory();

    return(
        <div className="icons">
            <img className="cart-image"
                 onClick={() => history.push('/cart')}
                 src={CART_URL} alt={CART_ALT}/>
            <span>{productsInCart.length}</span>

            <img className="wishlist-image"
                 src={WISHLIST_URL} alt={WISHLIST_ALT}/>
            <span>{productsInWishlist.length}</span>
        </div>
    )
}