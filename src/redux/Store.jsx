import { configureStore } from "@reduxjs/toolkit";
import { configure } from "@testing-library/react";
import { CartSlicee } from "./slices/CartSlicee";


export const store = configureStore({
    reducer:{
        cart: CartSlicee.reducer,
    }
})