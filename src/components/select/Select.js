import React, {useState} from "react";
import styles from './Select.module.css';
import {useHistory} from "react-router-dom";

export const Select = () => {
    const [select, setSelect] = useState('');
    const history = useHistory()

    const onSubmit = (e) => {
        e.preventDefault();

        switch (select) {
            case 'asc' :
                history.push('/asc')
                break;
            case 'desc' :
                history.push('/desc')
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
        <div className={styles.wrapper}>
            <form onSubmit={onSubmit}>
                <label>
                    <select onChange={onChange} className={styles.select}>
                        <option selected={true} disabled={true} className={styles.mainOption}>
                            Filter & Sort for all Products
                        </option>
                        <option disabled={true} className={styles.generalOptions}>Sort</option>
                        <option value="asc">Lowest Price</option>
                        <option value="desc">Highest Price</option>
                        <option disabled={true} className={styles.generalOptions}>Filter</option>
                        <option value="electronics">Electronics</option>
                        <option value="jewelery">Jewelery</option>
                        <option value="men-clothing">Men`s Clothing</option>
                        <option value="woman-clothing">Woman`s Clothing</option>
                    </select>
                </label>
                <input type="submit" value="Submit" className={styles.submit}/>
            </form>

        </div>
    )
}

