export const addCart=(products)=>{
    return{
        type : "ADDCART",
        payload: products
    }
}

export const delCart=(products)=>{
    return{
        type : "DELITEM",
        payload: products
    }
}
