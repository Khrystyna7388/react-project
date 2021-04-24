import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../../redux/services/value-action-creactors";
import {URL} from "../../redux/services/url";
import {Loading} from "../loading/Loading";

export const WomanClothingCategory = () => {
    const {isLoading, categoryProducts} =
        useSelector(({loading: {isLoading}, category: {categoryProducts}}) => ({
            isLoading,
            categoryProducts
        }))
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData(URL));
    }, [])

    return(
        <div>
            {isLoading && <Loading/>}

            {!isLoading && !!categoryProducts &&
            categoryProducts.filter(el => el.category === 'woman clothing')
                .map(el => <div>{el.title}</div>)
            }
        </div>
    )

}

//TODO