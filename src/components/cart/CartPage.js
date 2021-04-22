import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchCartItems} from "../../redux/action-creators";
import {Loading} from "../loading/Loading";

export const CartPage = () => {
    const {isLoading, cartItems, productsInCart} =
        useSelector(({loading: {isLoading}, cart: {cartItems, productsInCart}}) => ({
            isLoading,
            cartItems,
            productsInCart
        }))
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCartItems());
    }, [])

    return (
        <div>
            {isLoading && <Loading/>}

            {cartItems.filter(el => productsInCart.includes(el.id))
                .map(el => <div>{el.title}</div>)}

        </div>
    )
}