import React, {useEffect, useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Loading} from "../loading/Loading";
import {Item} from "./Item";
import {fetchData} from "../../redux/services/value-action-creactors";
import {URL} from "../../redux/services/url";

export const CartPage = () => {
    const {isLoading, cartItems, productsInCart, products} =
        useSelector(({loading: {isLoading},
                         cart: {cartItems, productsInCart},
                     products: {products}}) => ({
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

            <h3>Total price: ${calculatedCartSum}</h3>

            {!isLoading && !!cartItems &&
                cartItems.filter(el => productsInCart.includes(el.id))
                .map(el =>
                    <div key={el.id}>
                        <Item
                            product={el}
                        />
                    </div>)}
        </div>
    )
}