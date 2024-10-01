import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import wishSlice from "./slices/wishSlice";
import CartSlice from "./slices/CartSlice";


const productStore=configureStore({
    reducer:{
        productReducer:productSlice,
        wishReducer:wishSlice,
        CartReducer:CartSlice
    }
    
})

export default productStore