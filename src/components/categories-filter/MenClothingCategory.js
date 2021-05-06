import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../../redux/services/value-action-creactors";
import {Loading} from "../loading/Loading";
import {Product} from "../products/product/Product";
import {URL} from "../../redux/services/url";

export const MenClothingCategory = () => {
    const {isLoading, categoryProducts} =
        useSelector(({loading: {isLoading}, category: {categoryProducts}}) => ({
            isLoading,
            categoryProducts
        }))
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData(URL))
    }, [])

    return(
        <div>
            {isLoading && <Loading/>}

            {!isLoading && !!categoryProducts &&
            categoryProducts.filter(el => el.category === 'men\'s clothing')
                .map(el => <div key={el.id} style={{width: '60%', margin: '0 20% 0 20%'}}>
                    <Product product={el}/>
                </div>)
            }
        </div>
    )
}

