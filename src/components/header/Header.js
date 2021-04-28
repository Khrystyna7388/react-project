import React from "react";
import './Header.css';
import {Icons} from "./icons/Icons";
import {useHistory} from "react-router-dom";
import {CategoriesButtons} from "../categories-filter/CategoriesButtons";


export const Header = () => {
    const history = useHistory();


    return (
        <header>
            <h2 onClick={() => history.push('/')}>STORE</h2>
            <CategoriesButtons/>
            <Icons/>
        </header>
    )
}