//here data is coming from ui that is app.js
import { ADD_TO_CART,REMOVE_FROM_CART,EMPTY_CART } from "./constant";

export const addToCart=(data)=>{
    console.log("action is called",data)
    return{
        type:ADD_TO_CART,
        data:data
    };
}

export const removeToCart=(data)=>{
    console.log("removal action is called",data)
    return{
        type:REMOVE_FROM_CART,
        data:data
    };
}


export const emptyCart=()=>{
    console.log("Empty action is called")
    return{
        type:EMPTY_CART,
    };
}