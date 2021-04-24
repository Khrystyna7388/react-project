import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Loading} from "../loading/Loading";
import {Item} from "./Item";
import {fetchData} from "../../redux/services/value-action-creactors";
import {URL} from "../../redux/services/url";

export const WishlistPage = () => {
   const {isLoading, productsInWishlist, wishlistItems} =
    useSelector(({loading: {isLoading}, wishlist: {productsInWishlist, wishlistItems}}) => ({
        isLoading,
        productsInWishlist,
        wishlistItems
    }))
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData(URL));
    }, [])
    return(
        <div>
            {isLoading && <Loading/>}

            {!isLoading && !!wishlistItems &&
                wishlistItems.filter(el => productsInWishlist.includes(el.id)).map(el =>
            <Item
            product={el}
            />
            )}

        </div>
    )
}