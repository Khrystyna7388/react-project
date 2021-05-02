import React, {useEffect, useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Loading} from "../loading/Loading";
import {Item} from "./Item";
import {fetchData} from "../../redux/services/value-action-creactors";
import {URL} from "../../redux/services/url";

export const WishlistPage = () => {
    const {isLoading, productsInWishlist, wishlistItems, products} =
        useSelector(({loading: {isLoading},
                         wishlist: {productsInWishlist, wishlistItems},
                     products: {products}}) => ({
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
        dispatch(fetchData(URL));
    }, [])
    return (
        <div>
            {isLoading && <Loading/>}

            <h3>Total price: ${calculatedWishlistSum}</h3>

            {!isLoading && !!wishlistItems &&
            wishlistItems.filter(el => productsInWishlist.includes(el.id)).map(el =>
                <div key={el.id}>
                    <Item
                        product={el}
                    />
                </div>
            )}

        </div>
    )
}