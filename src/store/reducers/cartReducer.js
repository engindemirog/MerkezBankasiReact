import produce from "immer";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";

const initialState = {
    cartItems: []
}
export default function cartReducer(state = initialState, { type, payload }) {

    return produce(state, draft => {
        switch (type) {
            case ADD_TO_CART:
                let product = draft.cartItems.find(c=>c.product.id===payload.id)
                if(product){
                    product.quantity++;
                    break;
                }else{
                    draft.cartItems.push({quantity:1, product:payload})
                    break;
                }
            case REMOVE_FROM_CART:
                draft.cartItems = draft.cartItems.filter(c=>c.product.id!==payload.id)
                break;
            default:
        }
    })




}