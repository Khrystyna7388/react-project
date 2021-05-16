import React, {useEffect} from "react";
import './Products.css';
import {useDispatch, useSelector} from "react-redux";
import {Product} from "./product/Product";
import {Loading} from "../loading/Loading";
import {fetchData} from "../../redux/services/value-action-creactors";

export const Products = () => {
    const {products, isLoading, currentLimit} =
        useSelector(({
                         products: {products}, loading: {isLoading}, limit: {currentLimit}
                     }) => ({
            products,
            isLoading,
            currentLimit
        }))

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData(process.env.REACT_APP_URL))
    }, [])

    console.log(products)

    return (
        <div className="products-wrapper">

            {isLoading && <Loading/>}

            {!isLoading && !!products.length && products.map(el => <div className="product-item" key={el.id}>
                <Product product={el}/>
            </div>)}

        </div>
    )
}

