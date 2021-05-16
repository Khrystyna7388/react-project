import React, {useEffect, useMemo} from "react";
import styles from './Page.module.css';
import {useDispatch, useSelector} from "react-redux";
import {Loading} from "../loading/Loading";
import {fetchData} from "../../redux/services/value-action-creactors";
import {ProductDetails} from "../product-details/ProductDetails";

export const WishlistPage = () => {
    const {isLoading, productsInWishlist, wishlistItems, products} =
        useSelector(({
                         loading: {isLoading},
                         wishlist: {productsInWishlist, wishlistItems},
                         products: {products}
                     }) => ({
            isLoading,
            productsInWishlist,
            wishlistItems,
            products
        }))

    const calculatedWishlistSum = useMemo(() => {
        return products.filter(el => productsInWishlist.includes(el.id))
            .reduce((acc, el) => acc += el.price, 0)
    }, [products, productsInWishlist])

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData(process.env.REACT_APP_URL))
    }, [])
    return (
        <div>
            {isLoading && <Loading/>}

            <h2 className={styles.price}>Total price: ${calculatedWishlistSum}</h2>

            {!isLoading && !!wishlistItems &&
            wishlistItems.filter(el => productsInWishlist.includes(el.id)).map(el =>
                <div key={el.id}>
                    <ProductDetails product={el}/>
                </div>
            )}

        </div>
    )
}