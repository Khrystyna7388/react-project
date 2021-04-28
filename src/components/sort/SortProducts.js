import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../../redux/services/value-action-creactors";
import {URL} from "../../redux/services/url";
import Select from "react-select";

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

export const SortProducts  = () => {
    // const {isLoading, sortProductsList} =
    //     useSelector(({loading: {isLoading}, sort: {sortProductsList}}) => ({
    //         isLoading, sortProductsList
    //     }))
    // const dispatch = useDispatch();
    //
    // const onSubmit = (e) => {
    //     dispatch(fetchData(URL))
    //     e.preventDefault();
    // }

    return(
        <div>
            <Select options={options}/>
        </div>
    )
}