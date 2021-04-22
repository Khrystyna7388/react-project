import React, {useEffect} from "react";
import './Products.css';
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "../../redux/action-creators";
import {Product} from "./product/Product";
import {useHistory} from "react-router-dom";
import {Loading} from "../loading/Loading";

export const Products = () => {
    const {products, isLoading} =
        useSelector(({
                         products: {products}, loading: {isLoading},
                     }) => ({
            products,
            isLoading,
        }))

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(fetchProducts());
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
                    <button className="more-details-button" onClick={() =>
                        history.push(`/products/${el.id}`)}>More Details
                    </button>
                </div>
            ))}

        </div>
    )
}