import React from "react";
import './Header.css';
import {CART_URL, WISHLIST_URL, CART_ALT, WISHLIST_ALT} from "./types";


export const Header = () => {

    return (
        <header>
            <h2>PRODUCTS STORE</h2>

            <div className="icons">
                    <img className="cart-image"
                         src={CART_URL} alt={CART_ALT}/>
                    <span> 0</span>

                <img className="wishlist-image"
                     src={WISHLIST_URL} alt={WISHLIST_ALT}/>
                <span>0</span>
            </div>
        </header>
    )
}