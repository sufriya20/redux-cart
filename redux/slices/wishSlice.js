import { createSlice } from "@reduxjs/toolkit";


const wishlistSlice=createSlice({
    name:'wishlist',
    initialState:{
        wishlist:[]
    },
    reducers:{
        addTowishlist(state,action){
            const existing=state.wishlist.find(item=>item.id==action.payload.id)
            if(existing){
                alert("product Already Exist in Wislist!!")
            }
            else{
                state.wishlist.push(action.payload)
                alert("product added to wishlist")
            }
        },
        removeFromWislist(state,action){
            state.wishlist=state.wishlist.filter(item=>item.id!=action.payload)
            alert("product removed")
        }
    }
})
export default wishlistSlice.reducer
export const{addTowishlist,removeFromWislist}=wishlistSlice.actions