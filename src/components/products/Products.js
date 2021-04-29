import React, {useEffect} from "react";
import './Products.css';
import {useDispatch, useSelector} from "react-redux";
import {Product} from "./product/Product";
import {useHistory} from "react-router-dom";
import {Loading} from "../loading/Loading";
import {fetchData} from "../../redux/services/value-action-creactors";
import {URL} from "../../redux/services/url";


export const Products = () => {
    const {products, isLoading} =
        useSelector(({
                         products: {products}, loading: {isLoading},
                     }) => ({
            products,
            isLoading,
        }))

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData(URL))
    }, [])


    return (
        <div className="products-wrapper">
            {isLoading &&
            <Loading/>}

            {!isLoading && !!products &&
            products.map(el => (
                <div className="product-item" key={el.id}>
                    <Product
                        product={el}
                    />
                </div>
            ))}

        </div>
    )
}