import React from "react";
import styles from './Item.module.css';
import {useDispatch, useSelector} from "react-redux";
import {CartAndWishlistButtons} from "../cart-n-wishlist-buttons/CartAndWishlistButtons";
import {toggleItemInCart, toggleItemInWishlist} from "../../redux/action-creators";

export const Item = ({product}) => {
    const {productsInCart, productsInWishlist} =
        useSelector(({cart: {productsInCart}, wishlist: {productsInWishlist}}) => ({
            productsInCart,
            productsInWishlist
        }))
    const dispatch = useDispatch();

    return(
        <div className={styles.wrapper}>
            <h2 className={styles.title}>{product.title}</h2>
            <div className={styles.imageDiv}>
                <img className={styles.image} src={product.image}/>
            </div>
            <div>
                <p>{product.description}</p>
                <h2>${product.price}</h2>
            </div>

            <div>
                <CartAndWishlistButtons
                onCartClick={() => dispatch(toggleItemInCart(product.id))}
                onWishlistClick={() => dispatch(toggleItemInWishlist(product.id))}
                isInCart={productsInCart.includes(product.id)}
                isInWishlist={productsInWishlist.includes(product.id)}
                />
            </div>
        </div>
    )
}