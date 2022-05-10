import { createStore, compose, applyMiddleware } from "redux";
import reducers from "../reducer"

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducers, composer());
