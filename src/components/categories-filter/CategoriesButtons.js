import React from "react";
import styles from './CategoriesButtons.module.css';
import {useHistory} from "react-router-dom";

export const CategoriesButtons = () => {
    const history = useHistory();

    return(
        <div className={styles.wrapper}>
            <h3 className={styles.headerCategories} onClick={() => history.push('/categories/electronics')}>Electronics</h3>
            <h3 className={styles.headerCategories} onClick={() => history.push('/categories/jewelery')}>Jewelery</h3>
            <h3 className={styles.headerCategories} onClick={() => history.push('/categories/men-clothing')}>Men`s Clothing</h3>
            <h3 className={styles.headerCategories} onClick={() => history.push('/categories/woman-clothing')}>Woman`s Clothing</h3>
        </div>
    )
}