import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-hot-toast';
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
        <div className='group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-purple-200'>
            {/* Image Container */}
            <div className='relative overflow-hidden bg-gray-50 aspect-square'>
                <img 
                    src={post.image} 
                    alt={post.title}
                    className='w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500'
                />
                {/* Overlay */}
                <div className='absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300'></div>
                
                {/* Quick Add Button */}
                <div className='absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <button className='w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-purple-50 transition-colors duration-200'>
                        <svg className='w-5 h-5 text-gray-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' />
                        </svg>
                    </button>
                </div>
            </div>
            
            {/* Content */}
            <div className='p-6 space-y-4'>
                {/* Category Badge */}
                <div className='inline-block'>
                    <span className='px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full capitalize'>
                        {post.category}
                    </span>
                </div>
                
                {/* Title */}
        <div>
                <h3 className='text-gray-900 font-semibold text-lg leading-tight line-clamp-2 group-hover:text-purple-700 transition-colors duration-200'>
                    {post.title}
                </h3>
                
                {/* Description */}
        </div>
        <div>
                <p className='text-gray-600 text-sm leading-relaxed line-clamp-2'>
                    {post.description.split(" ").slice(0,15).join(" ") + "..."}
                </p>
                
                {/* Rating */}
                <div className='flex items-center space-x-2'>
                    <div className='flex items-center'>
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} className={`w-4 h-4 ${i < Math.floor(post.rating?.rate || 4) ? 'text-yellow-400' : 'text-gray-300'}`} fill='currentColor' viewBox='0 0 20 20'>
                                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                            </svg>
                        ))}
                    </div>
                    <span className='text-sm text-gray-500'>({post.rating?.count || 0})</span>
                </div>
                
                {/* Price and Action */}
                <div className='flex items-center justify-between pt-2'>
                    <div className='space-y-1'>
                        <p className='text-2xl font-bold text-gray-900'>${post.price}</p>
                        <p className='text-sm text-gray-500 line-through'>${(post.price * 1.2).toFixed(2)}</p>
                    </div>
                    
                    {cart.some((p) => p.id === post.id) ? (
                        <button 
                            onClick={removeFromCart}
                            className='px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg flex items-center space-x-2'
                        >
                            <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16' />
                            </svg>
                            <span>Remove</span>
                        </button>
                    ) : (
                        <button 
                            onClick={addToCart}
                            className='px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg flex items-center space-x-2'
                        >
                            <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 11-4 0v-6m4 0V9a2 2 0 10-4 0v4.01' />
                            </svg>
                            <span>Add to Cart</span>
                        </button>
                    )}
                </div>
        </div>
            </div>
        </div>
    )
}

export default Product