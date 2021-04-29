import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Loading} from "../loading/Loading";
import {Item} from "./Item";
import {fetchData} from "../../redux/services/value-action-creactors";
import {URL} from "../../redux/services/url";

export const CartPage = () => {
    const {isLoading, cartItems, productsInCart} =
        useSelector(({loading: {isLoading}, cart: {cartItems, productsInCart}}) => ({
            isLoading,
            cartItems,
            productsInCart
        }))
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData(URL))
    }, [])

    return (
        <div>
            {isLoading && <Loading/>}

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