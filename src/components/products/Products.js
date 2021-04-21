import React, {useEffect} from "react";
import './Products.css';
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "../../redux/action-creators";
import {Product} from "./product/Product";
import {toggleItemInCart, toggleItemInWishlist} from "../../redux/action-creators";
import {useHistory} from "react-router-dom";
import {Loading} from "../loading/Loading";

export const Products = () => {
    const {products, isLoading, productsInCart, productsInWishlist} =
        useSelector(({
                         products: {products}, loading: {isLoading},
                         cart: {productsInCart}, wishlist: {productsInWishlist}
                     }) => ({
            products,
            isLoading,
            productsInCart,
            productsInWishlist
        }))

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [])

    return (
        <div className="products-wrapper">
            {isLoading &&
            <Loading/>}

            {!isLoading && !!products &&
            products.map(el => (
                <div className="product-item" key={el.id}
                     onClick={() => history.push(`/products/${el.id}`)}
                >
                    <Product
                        product={el}
                        onCartClick={() => dispatch(toggleItemInCart(el.id))}
                        onWishlistClick={() => dispatch(toggleItemInWishlist(el.id))}
                        isInCart={productsInCart.includes(el.id)}
                        isInWishlist={productsInWishlist.includes(el.id)}
                    />
                </div>
            ))}
        </div>
    )
}