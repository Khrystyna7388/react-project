import React, {useState} from "react";
import {useHistory} from "react-router-dom";

export const SelectComponent = () => {
    const [sort, setSort] = useState('');
    const history = useHistory()

    const onSubmit = (e) => {
        if(sort === 'asc') {
            history.push('/asc=sort')

        } else if(sort === 'desc') {
            history.push('/desc=sort')

        } else if(sort === 'electronics') {
            history.push('/categories/electronics')

        } else if (sort === 'jewelery') {
            history.push('/categories/jewelery')

        } else if (sort === 'men-clothing') {
            history.push('/categories/men-clothing')

        } else if (sort === 'woman-clothing') {
            history.push('/categories/woman-clothing')
        }

        e.preventDefault();
    }

    const onChange = (e) => {
        setSort(e.target.value)
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>
                    <select onChange={onChange}>
                        <option value="asc">asc</option>
                        <option value="desc">desc</option>
                        <option value="electronics">Electronics</option>
                        <option value="jewelery">Jewelery</option>
                        <option value="men-clothing">Men`s Clothing</option>
                        <option value="woman-clothing">Woman`s Clothing</option>
                    </select>
                </label>
                <input type="submit" value="Submit"/>
            </form>

        </div>
    )
}