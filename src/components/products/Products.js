import React, {useEffect} from "react";
import './Products.css';
import {useDispatch, useSelector} from "react-redux";
import {Product} from "./product/Product";
import {Loading} from "../loading/Loading";
import {fetchData} from "../../redux/services/value-action-creactors";
import {URL} from "../../redux/services/url";
import {qsHelper, setCurrentLimit} from "../../redux/action-creators";
import {LoadMore} from "../load-more-button/LoadMore";
import {LIMIT_STEP} from "../../redux/recuders/current-limit-reducer";


export const Products = () => {
    const {products, isLoading, currentLimit} =
        useSelector(({
                         products: {products}, loading: {isLoading}, limit: {currentLimit}
                     }) => ({
            products,
            isLoading,
            currentLimit
        }))

    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(fetchData(`${URL}?${qsHelper({limit: currentLimit})}`))
    // }, [currentLimit])

    useEffect(() => {
        dispatch(fetchData(URL))
    }, [])

    console.log(products)

    return (
        <div className="products-wrapper">

            {isLoading && <Loading/>}

            {!isLoading && !!products && products.map(el => <div className="product-item" key={el.id}>
                <Product product={el}/>
            </div>)}

            {/*/!*{products.length < 20 && <LoadMore/>}*!/*/}
            {/*{products.length < 20 &&*/}
            {/*<button onClick={() => setCurrentLimit(prev => prev += LIMIT_STEP)}>load more</button>*/}
            {/*}*/}

        </div>
    )
}

//todo load more doesn`t work