import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../../redux/services/value-action-creactors";
import {URL} from "../../redux/services/url";
import {Loading} from "../loading/Loading";
import {ProductDetails} from "../product-details/ProductDetails";

export const SortComponent = ({sort}) => {
    const {isLoading, sortedProductsList} =
        useSelector(({loading: {isLoading}, sort: {sortedProductsList}}) => ({
            isLoading,
            sortedProductsList
        }))

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData(URL))
    }, [])

    const sortedProducts = sortedProductsList.sort(sort);

    return(
        <div>
            {isLoading && <Loading/>}

            {!isLoading && !!sortedProductsList &&
                sortedProducts
                .map(el => <div key={el.id}>
                    <ProductDetails product={el}/>
                </div>)
            }

        </div>
    )
}