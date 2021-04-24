import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../../redux/services/value-action-creactors";
import {URL} from "../../redux/services/url";
import {Loading} from "../loading/Loading";
import {Product} from "../products/product/Product";

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
            categoryProducts.filter(el => el.category === 'men clothing')
                .map(el => <div>{el.title}</div>)

                // .map(el => <div style={{width: '60%', margin: '0 20% 0 20%'}}>
                //     <Product product={el}/>
                // </div>)
            }
        </div>
    )

}

//TODO