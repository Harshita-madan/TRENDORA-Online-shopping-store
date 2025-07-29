import { createSlice } from "@reduxjs/toolkit";

export const LikeSlice = createSlice({
    name: "like",
    initialState: {
        likedProducts: []
    },
    reducers: {
        addToLikes: (state, action) => {
            const product = action.payload;
            const existingProduct = state.likedProducts.find(item => item.id === product.id);
            
            if (!existingProduct) {
                state.likedProducts.push(product);
            }
        },
        removeFromLikes: (state, action) => {
            const productId = action.payload;
            state.likedProducts = state.likedProducts.filter(item => item.id !== productId);
        },
        toggleLike: (state, action) => {
            const product = action.payload;
            const existingProduct = state.likedProducts.find(item => item.id === product.id);
            
            if (existingProduct) {
                state.likedProducts = state.likedProducts.filter(item => item.id !== product.id);
            } else {
                state.likedProducts.push(product);
            }
        }
    }
});

export const { addToLikes, removeFromLikes, toggleLike } = LikeSlice.actions;
export default LikeSlice.reducer;