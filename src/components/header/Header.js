import React from "react";
import './Header.css';
import {Icons} from "./icons/Icons";
import {useHistory} from "react-router-dom";


export const Header = () => {
    const history = useHistory();


    return (
        <header>
            <h2 onClick={() => history.push('/')}>PRODUCTS STORE</h2>

            <Icons/>
        </header>
    )
}