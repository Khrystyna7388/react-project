import React from "react";
import './Product.css';

export const Product = ({product, onCartClick, onWishlistClick, isInCart, isInWishlist}) => (
    <div className="wrapper" key={product.id}>
        <h2 className="title">{product.title}</h2>
        <div className="image">
            <img src={product.image}/>
        </div>
        <h3 className="price">{product.price}$</h3>
        <p className="description">{product.description}</p>
        <div>
            <button onClick={onWishlistClick}>
                {isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
            </button>
            <button onClick={onCartClick}>
                {isInCart ? 'Remove from Cart' : 'Add to Cart'}
            </button>
        </div>
    </div>
)