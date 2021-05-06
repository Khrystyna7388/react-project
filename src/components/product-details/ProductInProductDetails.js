import React from "react";
import styles from './ProductInProductDetails.module.css';
import {useDispatch, useSelector} from "react-redux";
import {CartAndWishlistButtons} from "../cart-n-wishlist-buttons/CartAndWishlistButtons";
import {toggleItemInCart} from "../../redux/services/toggleItemInCart";
import {toggleItemInWishlist} from "../../redux/services/toggleItemInWishlist";

export const ProductInProductDetails = ({product}) => {
    const {productsInCart, productsInWishlist} =
        useSelector(({cart: {productsInCart}, wishlist: {productsInWishlist}}) => ({
            productsInCart,
            productsInWishlist
        }))
    const dispatch = useDispatch();

    return (
        <div>
            <div className={styles.wrapper}>
                <div className={styles.divImage}>
                    <img className={styles.productImage} src={product.image}/>
                </div>
                <div className={styles.divText}>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <h2>${product.price}</h2>
                </div>
            </div>
            <div className={styles.cartAndWishButtons}>
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
