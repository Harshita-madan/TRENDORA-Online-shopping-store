import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-hot-toast';
import { Heart, Star, ShoppingCart, Trash2 } from 'lucide-react';
import {add, remove} from "../redux/slices/CartSlicee"

const Product = ({post}) => {
    const {cart} = useSelector((state)=> state);
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(add(post));
        toast.success("Item added to Cart");
    }

    const removeFromCart = () => {
        dispatch(remove(post.id));
        toast.success("Item removed from Cart");
    }

    return (
        <div className='group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-gray-200 transition-all duration-500 hover:shadow-xl hover:shadow-gray-100/50'>
            {/* Image Container */}
            <div className='relative overflow-hidden bg-gray-50 aspect-square'>
                <img 
                    src={post.image} 
                    alt={post.title}
                    className='w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-700'
                />
                
                {/* Wishlist Button */}
                <div className='absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <button className='w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-sm flex items-center justify-center hover:bg-white transition-colors duration-200'>
                        <Heart className='w-4 h-4 text-gray-600' />
                    </button>
                </div>
            </div>
            
            {/* Content */}
            <div className='p-6 space-y-4'>
                {/* Category */}
                <div className='text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    {post.category}
                </div>
                
                {/* Title */}
                <h3 className='text-gray-900 font-medium text-lg leading-tight line-clamp-2'>
                    {post.title}
                </h3>
                
                {/* Rating */}
                <div className='flex items-center space-x-2'>
                    <div className='flex items-center'>
                        {[...Array(5)].map((_, i) => (
                            <Star 
                                key={i} 
                                className={`w-4 h-4 ${i < Math.floor(post.rating?.rate || 4) ? 'text-yellow-400 fill-current' : 'text-gray-200'}`} 
                            />
                        ))}
                    </div>
                    <span className='text-sm text-gray-500'>({post.rating?.count || 0})</span>
                </div>
                
                {/* Price and Action */}
                <div className='flex items-center justify-between pt-2'>
                    <div className='space-y-1'>
                        <p className='text-2xl font-light text-gray-900'>${post.price}</p>
                    </div>
                    
                    {cart.some((p) => p.id === post.id) ? (
                        <button 
                            onClick={removeFromCart}
                            className='flex items-center space-x-2 px-4 py-2 bg-red-50 text-red-600 rounded-full font-medium hover:bg-red-100 transition-colors duration-200'
                        >
                            <Trash2 className='w-4 h-4' />
                            <span className='text-sm'>Remove</span>
                        </button>
                    ) : (
                        <button 
                            onClick={addToCart}
                            className='flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors duration-200'
                        >
                            <ShoppingCart className='w-4 h-4' />
                            <span className='text-sm'>Add</span>
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Product