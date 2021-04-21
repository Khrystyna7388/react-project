import {SET_SINGLE_PRODUCT} from "../action-types/single-product-types";
import {setIsLoading} from "./loading-action-creators";
import {URL} from "./url";

const setSingleProduct = (dispath) => ({type: SET_SINGLE_PRODUCT, dispath});

const fetchProductDetails = (url) => async (dispatch) => {
    // if (!id) return;
    try {
        dispatch(setIsLoading(true));
        const response = await fetch(url);
        const data = await response.json();
        dispatch(setSingleProduct(data));
    } catch (e) {
        console.error(e)
    } finally {
        dispatch(setIsLoading(false));
    }
}

export {
    setSingleProduct,
    fetchProductDetails
}