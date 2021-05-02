import {applyMiddleware, createStore} from "redux";
import {reducer} from "./recuders";
import thunk from "redux-thunk";

const persister = (store) => (next) => (action) => {
    next(action)

    const {wishlist, cart, products} = store.getState();
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('products', JSON.stringify(products));
}

const middlewares = [thunk, persister]

export const store = createStore(reducer, applyMiddleware(...middlewares));