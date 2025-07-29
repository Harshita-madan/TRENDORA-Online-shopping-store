import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-hot-toast';
import { Heart, ShoppingCart } from 'lucide-react';
import {add, remove} from "../redux/slices/CartSlicee"
import { toggleLike } from "../redux/slices/LikeSlice";

const Product = ({post}) => {
    const {cart} = useSelector((state)=> state);
    const { likedProducts } = useSelector((state) => state.like);
    const dispatch = useDispatch();

    const isInCart = cart.some((p) => p.id === post.id);
    const isLiked = likedProducts.some((p) => p.id === post.id);

    const addToCart = () => {
        dispatch(add(post));
        toast.success("Item added to Cart");
    }

    const removeFromCart = () => {
        dispatch(remove(post.id));
        toast.error("Item removed from Cart");
    }

    const handleLike = () => {
        dispatch(toggleLike(post));
        if (isLiked) {
            toast.error("Removed from Wishlist");
        } else {
            toast.success("Added to Wishlist");
        }
    }

    return (
        <div className="group relative bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
            {/* Like Button */}
            <button
                onClick={handleLike}
                className={`absolute top-4 right-4 z-10 p-2 rounded-full transition-all duration-300 ${
                    isLiked 
                        ? 'bg-red-500 text-white shadow-lg' 
                        : 'bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white'
                }`}
            >
                <Heart 
                    className={`w-5 h-5 transition-all duration-300 ${
                        isLiked ? 'fill-current' : ''
                    }`} 
                />
            </button>

            {/* Product Image */}
            <div className="aspect-square bg-gray-50 p-8 group-hover:bg-gray-100 transition-colors duration-300">
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
            </div>

            {/* Product Info */}
            <div className="p-6 space-y-4">
                <div className="space-y-2">
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {post.category}
                    </p>
                    <h3 className="text-lg font-medium text-gray-900 leading-tight line-clamp-2">
                        {post.title}
                    </h3>
                </div>

                <div className="flex items-center justify-between">
                    <div className="space-y-1">
                        <p className="text-2xl font-light text-gray-900">${post.price}</p>
                        <div className="flex items-center space-x-1">
                            <div className="flex text-yellow-400">
                                {"★".repeat(Math.floor(post.rating?.rate || 0))}
                                {"☆".repeat(5 - Math.floor(post.rating?.rate || 0))}
                            </div>
                            <span className="text-sm text-gray-500">
                                ({post.rating?.count || 0})
                            </span>
                        </div>
                    </div>

                    <button
                        className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                            isInCart
                                ? "bg-red-600 text-white hover:bg-red-700"
                                : "bg-gray-900 text-white hover:bg-gray-800"
                        }`}
                        onClick={isInCart ? removeFromCart : addToCart}
                    >
                        <ShoppingCart className="w-4 h-4" />
                        <span className="text-sm">
                            {isInCart ? "Remove" : "Add to Cart"}
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Product