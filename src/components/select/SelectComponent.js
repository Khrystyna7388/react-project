import React, {useState} from "react";
import {useHistory} from "react-router-dom";

export const SelectComponent = () => {
    const [select, setSelect] = useState('');
    const history = useHistory()

    const onSubmit = (e) => {
        e.preventDefault();

        switch (select) {
            case 'asc' :
                history.push('/asc=sort')
                break;
            case 'desc' :
                history.push('/desc=sort')
                break;
            case  'electronics' :
                history.push('/categories/electronics')
                break;
            case 'jewelery' :
                history.push('/categories/jewelery')
                break;
            case 'men-clothing' :
                history.push('/categories/men-clothing')
                break;
            case 'woman-clothing' :
                history.push('/categories/woman-clothing')
                break;
            default:
                alert('Please, select the correct option')
        }
    }

    const onChange = (e) => {
        setSelect(e.target.value)
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>
                    <select onChange={onChange} style={{width: '90%', height: '30px'}}>
                        <option selected={true} disabled={true} style={{backgroundColor: 'silver'}}>Filter & Sort</option>
                        <option disabled={true} style={{backgroundColor: 'gainsboro'}}>Sort</option>
                        <option value="asc">Lowest Price</option>
                        <option value="desc">Highest Price</option>
                        <option disabled={true} style={{backgroundColor: 'gainsboro'}}>Filter</option>
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