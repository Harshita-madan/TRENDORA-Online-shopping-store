import { createSlice } from "@reduxjs/toolkit";

export const CartSlicee = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        add: (state,action) => {
            state.push(action.payload);
        },
        remove : (state,action) => {
            return state.filter((item) => item.id !== action.payload)
        },
    }
});

export const {add,remove} = CartSlicee.actions;
export default CartSlicee.reducer;