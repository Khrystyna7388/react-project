import React from "react";

export const Product = ({product, onCartClick, onWishlistClick, isInCart, isInWishlist}) => (
    <div key={product.id}>
        <h2>{product.title}</h2>
        <div>
            <img src={product.image}/>
        </div>
        <h3>{product.price}</h3>
        <p>{product.description}</p>
        <button onClick={onWishlistClick}>
            {isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
        </button>
        <button onClick={onCartClick}>
            {isInCart ? 'Remove from Cart' : 'Add to Cart'}
        </button>
    </div>
)