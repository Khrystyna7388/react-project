import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../../redux/services/value-action-creactors";
import {URL} from "../../redux/services/url";
import {Loading} from "../loading/Loading";
import {Product} from "../products/product/Product";

export const AscSortedProducts = () => {
    const {isLoading, sortedProductsList} =
        useSelector(({loading: {isLoading}, sort: {sortedProductsList}}) => ({
            isLoading,
            sortedProductsList
        }))

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData(URL))
    }, [])

    return(
        <div>
            {isLoading && <Loading/>}

            {!isLoading && !!sortedProductsList &&
            sortedProductsList.sort((a, b) => a.price - b.price)
                .map(el => <div key={el.id} style={{width: '60%', margin: '0 20% 0 20%'}}>
                    <Product product={el}/>
                </div>)
            }

        </div>
    )
}