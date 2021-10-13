export const SET_PRODUCTS ="SET_PRODUCTS"
export const GET_PRODUCTS ="GET_PRODUCTS"


export const setProducts=(products)=>({
    type:SET_PRODUCTS,
    payload : products
})

export const getProducts=()=>({
    type:GET_PRODUCTS
})