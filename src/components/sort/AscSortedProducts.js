import React from "react";
import {SortComponent} from "./SortComponent";

export const AscSortedProducts = () => {

    return(
        <SortComponent sort={(a, b) => a.price - b.price}/>
    )
}