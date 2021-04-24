import React from "react";
import {useHistory} from "react-router-dom";

export const Categories = () => {
    const history = useHistory();

    return(
        <div>
            <span onClick={() => history.push('/electronics')}>Electronics</span>
            <span onClick={() => history.push('/jewelery')}>Jewelery</span>
            <span onClick={() => history.push('/men-clothing')}>Men Clothing</span>
            <span onClick={() => history.push('/woman-clothing')}>Woman Clothing</span>
        </div>
    )
}