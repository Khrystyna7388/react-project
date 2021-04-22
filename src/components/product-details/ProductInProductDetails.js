import React from "react";
import './ProductInProductDetails.css';
import {useDispatch, useSelector} from "react-redux";
import {CartAndWishlistButtons} from "../cart-n-wishlist-buttons/CartAndWishlistButtons";
import {toggleItemInCart, toggleItemInWishlist} from "../../redux/action-creators";

export const ProductInProductDetails = (productInDetails) => {
    const {productsInCart, productsInWishlist} =
        useSelector(({cart: {productsInCart}, wishlist: {productsInWishlist}}) => ({
            productsInCart,
            productsInWishlist
        }))
    const dispatch = useDispatch();

    return (
        <div>
            <div className="wrapper">
                <div className="div-image">
                    <img className="product-image" src={productInDetails.image}/>
                </div>
                <div className="div-text">
                    <h2>{productInDetails.title}</h2>
                    <p>{productInDetails.description}</p>
                    <h2>${productInDetails.price}</h2>
                </div>
            </div>
            <CartAndWishlistButtons
                onCartClick={() => dispatch(toggleItemInCart(productInDetails.id))}
                onWishlistClick={() => dispatch(toggleItemInWishlist(productInDetails.id))}
                isInCart={productsInCart.includes(productInDetails.id)}
                isInWishlist={productsInWishlist.includes(productInDetails.id)}
            />
        </div>
    )
}
