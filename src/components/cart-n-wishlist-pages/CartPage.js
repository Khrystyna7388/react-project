import React, {useEffect, useMemo} from "react";
import styles from './Page.module.css';
import {useDispatch, useSelector} from "react-redux";
import {Loading} from "../loading/Loading";
import {fetchData} from "../../redux/services/value-action-creactors";
import {URL} from "../../redux/services/url";
import {ProductDetails} from "../product-details/ProductDetails";

export const CartPage = () => {
    const {isLoading, cartItems, productsInCart, products} =
        useSelector(({
                         loading: {isLoading},
                         cart: {cartItems, productsInCart},
                         products: {products}
                     }) => ({
            isLoading,
            cartItems,
            productsInCart,
            products
        }))
    const calculatedCartSum = useMemo(() => {
        return products.filter(el => productsInCart.includes(el.id))
            .reduce((acc, el) => acc += el.price, 0)
    }, [products, productsInCart])

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData(URL))
    }, [])

    return (
        <div>
            {isLoading && <Loading/>}

            <h2 className={styles.price}>Total price: ${calculatedCartSum}</h2>

            {!isLoading && !!cartItems &&
            cartItems.filter(el => productsInCart.includes(el.id))
                .map(el =>
                    <div key={el.id}>
                        <ProductDetails product={el}/>
                    </div>)}
        </div>
    )
}