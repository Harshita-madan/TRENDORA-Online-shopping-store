import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlicee";
import LikeSlice from "./slices/LikeSlice";

export const store = configureStore({
    reducer: {
        cart: CartSlice,
        like: LikeSlice
    }
});