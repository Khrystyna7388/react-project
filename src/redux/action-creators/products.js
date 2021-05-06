// import {SET_PRODUCTS} from "../action-types";
// import {URL} from "./url";
// import {setIsLoading} from "./loading-action-creators";
//
// const setProducts = (payload) => ({type: SET_PRODUCTS, payload});
//
// const fetchProducts = () => async (dispatch) => {
//     try {
//         dispatch(setIsLoading(true));
//         const response = await fetch(URL);
//         const data = await response.json();
//         dispatch(setProducts(data));
//     } catch (e) {
//         console.error(e)
//     } finally {
//         dispatch(setIsLoading(false));
//     }
// }
//
// export {
//     setProducts,
//     fetchProducts
// }


//todo delete