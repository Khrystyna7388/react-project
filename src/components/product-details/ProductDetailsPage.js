import React, {useEffect} from "react";
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {fetchProductDetails} from "../../redux/action-creators/single-product-action-creators";
import {Loading} from "../loading/Loading";
import {ProductInProductDetails} from "./ProductInProductDetails";

export const ProductDetailsPage = () => {
    const {singleProduct, isLoading} =
        useSelector(({
                         singleProduct: {singleProduct},
                         loading: {isLoading}
                     }) => ({
            singleProduct,
            isLoading
        }))
    const params = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProductDetails(params.id));
    }, [])

    return (
        <div>
            {isLoading && <Loading/>}

            {!isLoading && singleProduct &&
            <ProductInProductDetails
                productInDetails={singleProduct}
            />
            }
        </div>
    )
}