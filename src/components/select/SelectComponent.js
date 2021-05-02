import React, {useState} from "react";
import {useHistory} from "react-router-dom";

export const SelectComponent = () => {
    const [select, setSelect] = useState('');
    const history = useHistory()

    const onSubmit = (e) => {
        if (select === 'asc') {
            history.push('/asc=sort')

        } else if (select === 'desc') {
            history.push('/desc=sort')

        } else if (select === 'electronics') {
            history.push('/categories/electronics')

        } else if (select === 'jewelery') {
            history.push('/categories/jewelery')

        } else if (select === 'men-clothing') {
            history.push('/categories/men-clothing')

        } else if (select === 'woman-clothing') {
            history.push('/categories/woman-clothing')
        }

        e.preventDefault();
    }

    const onChange = (e) => {
        setSelect(e.target.value)
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>
                    <select onChange={onChange} style={{width: '90%', height: '30px'}}>
                        <option style={{backgroundColor: 'silver'}}>Filter & Sort</option>
                        <option style={{backgroundColor: 'gainsboro'}}>Sort</option>
                        <option value="asc">Lowest Price</option>
                        <option value="desc">Highest Price</option>
                        <option style={{backgroundColor: 'gainsboro'}}>Filter</option>
                        <option value="electronics">Electronics</option>
                        <option value="jewelery">Jewelery</option>
                        <option value="men-clothing">Men`s Clothing</option>
                        <option value="woman-clothing">Woman`s Clothing</option>
                    </select>
                </label>
                <input type="submit" value="Submit"
                       style={{width: "10%", height: '30px', backgroundColor: 'white'}}/>
            </form>

        </div>
    )
}


//TODO не клікабельні filter n sort, замінити іфки, create css file