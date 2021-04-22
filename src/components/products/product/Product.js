import React from "react";
import './Product.css';
import {useDispatch, useSelector} from "react-redux";
import {CartAndWishlistButtons} from "../../cart-n-wishlist-buttons/CartAndWishlistButtons";
import {toggleItemInCart, toggleItemInWishlist} from "../../../redux/action-creators";

export const Product = ({product}) => {
    const {productsInCart, productsInWishlist} =
        useSelector(({
                         cart: {productsInCart}, wishlist: {productsInWishlist}
                     }) => ({
            productsInCart,
            productsInWishlist
        }))

    const dispatch = useDispatch();

    return (
        <div className="wrapper" key={product.id}>
            <h2 className="title">{product.title}</h2>
            <div className="image">
                <img src={product.image}/>
            </div>
            <h2 className="price">${product.price}</h2>

            <CartAndWishlistButtons
                onCartClick={() => dispatch(toggleItemInCart(product.id))}
                onWishlistClick={() => dispatch(toggleItemInWishlist(product.id))}
                isInCart={productsInCart.includes(product.id)}
                isInWishlist={productsInWishlist.includes(product.id)}
            />
        </div>
    )
}
