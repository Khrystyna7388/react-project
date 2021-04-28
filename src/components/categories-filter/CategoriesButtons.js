import React from "react";
import {useHistory} from "react-router-dom";

export const CategoriesButtons = () => {
    const history = useHistory();

    return(
        <div style={{width: '40%', display: 'flex', justifyContent: 'space-between'}}>
            <h3 onClick={() => history.push('/categories/electronics')}>Electronics</h3>
            <h3 onClick={() => history.push('/categories/jewelery')}>Jewelery</h3>
            <h3 onClick={() => history.push('/categories/men-clothing')}>Men Clothing</h3>
            <h3 onClick={() => history.push('/categories/woman-clothing')}>Woman Clothing</h3>
        </div>
    )
}