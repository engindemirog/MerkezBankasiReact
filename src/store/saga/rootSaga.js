import {takeLatest} from "redux-saga/effects"
import { GET_PRODUCTS } from "../actions/productActions";
import { handleGetProducts } from "./product/productSaga";


function* rootSaga() {
    yield takeLatest(GET_PRODUCTS,handleGetProducts)
}

export default rootSaga;