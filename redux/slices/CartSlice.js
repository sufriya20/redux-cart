import { createSlice } from "@reduxjs/toolkit";
import Cart from "../../src/pages/Cart";

const CartSlice=createSlice({
    name:'Cart',
    initialState:{
        cart:[]
    },
    reducers:{
        addToCart(state,action){
            const existing=state.cart.find(item=>item.id==action.payload.id)
            console.log(existing);
            if(existing){
                existing.quantity+=1
            }
            else{
                let prod=action.payload
                prod={...prod,quantity:1}
                state.cart.push(prod)
            }
            alert("Product added to Cart!!")
        },
        removeFromCart(state,action){
            state.cart=state.cart.filter(item=>item.id!=action.payload)
            alert("Product Removed From Cart!!")
        },
        increase(state,action){
            const existing=state.cart.find(item=>item.id==action.payload)
            existing.quantity++
        },
        decrease(state,action){
            const existing=state.cart.find(item=>item.id==action.payload)
            if(existing.quantity==1){
                state.cart=state.cart.filter(item=>item.id!=action.payload)
                alert("Product Removed From Cart!!")
            }
            else{
                existing.quantity--
            }

        },
        checkout(state){
            state.cart=[]
        }
    
    }
})
export default CartSlice.reducer
export const {addToCart,removeFromCart,increase,decrease,checkout}=CartSlice.actions