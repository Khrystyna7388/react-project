import {combineReducers} from "redux";
import productsReducer from './products';
import singleProductReducer from './singleProduct';
import cartReducer from './cart';
import wishlistReducer from './wishlist';
import loadingReducer from './loading';
import categoryReducer from './category';
import sortReducer from './sort';
import limitReducer from './currentLimit';


export const reducer = combineReducers({
    products: productsReducer,
    singleProduct: singleProductReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    loading: loadingReducer,
    category: categoryReducer,
    sort: sortReducer,
    limit: limitReducer
})