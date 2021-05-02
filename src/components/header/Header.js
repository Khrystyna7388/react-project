import React from "react";
import './Header.css';
import {Icons} from "./icons/Icons";
import {useHistory} from "react-router-dom";
import {CategoriesButtons} from "../categories-filter/CategoriesButtons";


export const Header = () => {
    const history = useHistory();


    return (
        <header>
            <h1 className="store" onClick={() => history.push('/')}>STORE</h1>
                <CategoriesButtons/>
            <div className="icons">
                <Icons/>
            </div>
        </header>
    )
}