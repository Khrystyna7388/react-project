import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "../../redux/action-creators";

export const Products = () => {
    const products = useSelector(({products: {products}}) => products)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [])

    return(
        <div>
            {products.map(el => <div>{el.title}</div>)}
        </div>
    )
}