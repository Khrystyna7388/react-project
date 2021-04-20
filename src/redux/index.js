import {applyMiddleware, createStore} from "redux";
import {reducer} from "./recuders";
import thunk from "redux-thunk";

const middlewares = [thunk]

export const store = createStore(reducer, applyMiddleware(...middlewares));