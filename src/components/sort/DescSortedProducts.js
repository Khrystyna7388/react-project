import React from "react";
import {SortComponent} from "./SortComponent";

export const DescSortedProducts = () => {

    return(
        <SortComponent sort={(a, b) => b.price - a.price}/>
    )
}