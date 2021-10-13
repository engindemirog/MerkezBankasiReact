import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";
import productReducer from "./reducers/productReducer";


export const rootReducer = combineReducers({
    cart:cartReducer,
    products:productReducer
})