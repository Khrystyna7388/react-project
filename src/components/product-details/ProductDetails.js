import React, {useEffect} from "react";
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {fetchProductDetails} from "../../redux/action-creators/single-product-action-creators";
import {Product} from "../products/product/Product";
import {toggleItemInCart, toggleItemInWishlist} from "../../redux/action-creators";

export const ProductDetails = () => {
    const {singleProduct, productsInCart, productsInWishlist, isLoading} =
        useSelector(({
                         singleProduct: {singleProduct},
                         cart: {productsInCart},
                         wishlist: {productsInWishlist},
                         loading: {isLoading}
                     }) => ({
            singleProduct,
            productsInCart,
            productsInWishlist,
            isLoading
        }))
    const params = useParams();
    console.log(params);
    const id = params.id;
    console.log(params.id)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProductDetails(`${URL}/${params.id}`))
    }, [])

    return (
        <div>
            {!isLoading && singleProduct &&
            <Product
                product={singleProduct}
                onCartClick={() => dispatch(toggleItemInCart(singleProduct.id))}
                onWishlistClick={() => dispatch(toggleItemInWishlist(singleProduct.id))}
                isInCart={productsInCart.includes(singleProduct.id)}
                isInWishlist={productsInWishlist.includes(singleProduct.id)}
            />
            }
        </div>
    )
}