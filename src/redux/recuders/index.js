import {combineReducers} from "redux";
import productsReducer from './products-reducer';
import singleProductReducer from './single-product-reducer';
import cartReducer from './cart-reducer';
import wishlistReducer from './wishlist-reducer';
import loadingReducer from './loading-reducer';
import categoryReducer from './category-reducer';
import sortReducer from './sort-reducer';
import limitReducer from './current-limit-reducer';


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