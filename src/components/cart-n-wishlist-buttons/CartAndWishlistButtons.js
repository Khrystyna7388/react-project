import React from "react";
import './CartAndWishlistButtons.css';

export const CartAndWishlistButtons = ({onCartClick, onWishlistClick, isInCart, isInWishlist}) =>

    (
        <div>
            <div className="buttons">
                <button onClick={onWishlistClick}>
                    {isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
                </button>
                <button onClick={onCartClick}>
                    {isInCart ? 'Remove from Cart' : 'Add to Cart'}
                </button>
            </div>
        </div>
    )
