// import React from 'react'
// import {FaShoppingCart} from "react-icons/fa"
// import { NavLink } from 'react-router-dom';
// const Navbar = () => {
//   return (
//     <div>
//         <nav className="flex mx-auto max-w-6xl  justify-between">
//             <NavLink to="/">
//                 <img src="logo.png" alt='pic' width={300} height={100} />
//             </NavLink>

//             <div>
//                 <NavLink to="/">
//                     <p>Home</p>
//                 </NavLink>
//                 <NavLink to="/cart">
//                     <div className='relative'>
//                         <FaShoppingCart className=''/>
//                         {
//                             cart.length > 0 &&
//                             <span 
//                             className='absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 
//                             flex justify-center items-center animate-bounce rounded-full text-white'>
//                                 {cart.length}
//                             </span>
//                         }
//                     </div>    
//                 </NavLink>
                
//             </div> 
//         </nav>
//     </div>
//   )
// }

// export default Navbar;

import React, { useState } from 'react'
import {FaShoppingCart, FaHeart} from "react-icons/fa"
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const {cart} = useSelector((state) => state);
    const { likedProducts } = useSelector((state) => state.like);

  return (
    <div className="">
        <div className='flex justify-between items-center h-20 max-w-6xl mx-auto'>
            <NavLink to="/">
                <div className='ml-5 flex items-center py-5'>
                    <img
                        src="finallogo2.png"
                        alt='Trendora Logo'
                        className='h-[230px] w-auto'
                        
                    />
                </div>
            </NavLink>
            
            <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6'>
                <NavLink to="/">
                    <p>Home</p>
                </NavLink>

                <NavLink to="/all-products">
                    <p>All Products</p>
                </NavLink>

                <NavLink to="/wishlist">
                    <div className='relative'>
                        <FaHeart className='text-xl'/>
                        {likedProducts.length > 0 && (
                            <span
                                className='absolute -top-1 -right-2 bg-red-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white'
                            >{likedProducts.length}</span>
                        )}
                    </div>
                </NavLink>

                <NavLink to="/cart">
                    <div className='relative'>
                        <FaShoppingCart className='text-2xl'/>
                        {cart.length > 0 && (
                            <span
                                className='absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white'
                            >{cart.length}</span>
                        )}
                    </div>
                </NavLink>

                {/* Login and Signup Buttons */}
                {/* <NavLink to="/login">
                    <button className="px-4 py-2 rounded-full bg-white/10 text-slate-100 border border-white/20 hover:bg-white/20 transition">
                        Login
                    </button>
                </NavLink>
                <NavLink to="/signup">
                    <button className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition">
                        Sign Up
                    </button>
                </NavLink> */}
            </div>
        </div>
    </div>
  )
}

export default Navbar;