import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../../redux/services/value-action-creactors";
import {Loading} from "../loading/Loading";
import {ProductDetails} from "../product-details/ProductDetails";

export const SortComponent = ({sortType}) => {
    const {isLoading, sortedProductsList} =
        useSelector(({loading: {isLoading}, sort: {sortedProductsList}}) => ({
            isLoading,
            sortedProductsList
        }))

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData(process.env.REACT_APP_URL))
    }, [])

    let sort;

    switch (sortType) {
        case 'asc':
            sort = (a, b) => a.price - b.price
            break;
        case 'desc':
            sort = (a, b) => b.price - a.price
            break;
        default:
            alert('Please, select the correct option');
    }


    const sortedProducts = sortedProductsList.sort(sort);

    return (
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