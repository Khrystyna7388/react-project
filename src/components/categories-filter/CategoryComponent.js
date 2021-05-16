import React, {useEffect} from "react";
import styles from './CategoryComponent.module.css';
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../../redux/services/value-action-creactors";
import {Loading} from "../loading/Loading";
import {Product} from "../products/product/Product";

export const CategoryComponent = ({category}) => {
    const {categoryProducts, isLoading} =
        useSelector(({category: {categoryProducts}, loading: {isLoading}}) => ({
            categoryProducts,
            isLoading
        }))
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData(process.env.REACT_APP_URL))
    }, [])

    const filteredCategoryProducts = categoryProducts.filter(el => el.category === category)

    return (
        <div>
            {isLoading && <Loading/>}

            {!isLoading && !!categoryProducts &&
            filteredCategoryProducts
                .map(el =>
                    <div key={el.id} className={styles.product}>
                        <Product product={el}/>
                    </div>
                )
            }

        </div>
    )
}