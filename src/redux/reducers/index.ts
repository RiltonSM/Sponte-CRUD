import { combineReducers } from "redux";
import ProductsReducer from './products';

export default combineReducers({
    products: ProductsReducer
})
