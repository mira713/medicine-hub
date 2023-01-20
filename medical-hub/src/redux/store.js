
import { legacy_createStore,applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import ProductReducer from './ProductReducer';



export const store = legacy_createStore(ProductReducer,applyMiddleware(thunk))