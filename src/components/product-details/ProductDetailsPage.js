import React, {useEffect} from "react";
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {Loading} from "../loading/Loading";
import {ProductDetails} from "./ProductDetails";
import {fetchData} from "../../redux/services/value-action-creactors";
import {URL} from "../../redux/services/url";

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
        // dispatch(fetchData(`${process.env["REACT_APP_URL "]}/${params.id}`))
        dispatch(fetchData(`${URL}/${params.id}`))
    }, [])

    return (
        <div>
            {isLoading && <Loading/>}

            {!isLoading && !!singleProduct &&
            <ProductDetails
                product={singleProduct}
            />
            }
        </div>
    )
}