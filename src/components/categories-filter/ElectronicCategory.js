import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../../redux/services/value-action-creactors";
import {URL} from "../../redux/services/url";
import {Loading} from "../loading/Loading";
import {Product} from "../products/product/Product";

export const ElectronicCategory = () => {

    const {categoryProducts, isLoading} =
        useSelector(({category: {categoryProducts}, loading: {isLoading}}) => ({
            categoryProducts,
            isLoading
        }))
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData(URL))
    }, [])

    return (
        <div>
            {isLoading && <Loading/>}

            {!isLoading && !!categoryProducts &&
            categoryProducts.filter(el => el.category === 'electronics')
                .map(el =>
                    <div key={el.id} style={{width: '60%', margin: '0 20% 0 20%'}}>
                        <Product product={el}/>
                    </div>
                )
            }

        </div>
    )
}

