import React from 'react'
import { ShoppingCart } from 'lucide-react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const {cart} = useSelector((state) => state);

    return (
        <div className="bg-white border-b border-gray-100">
            <div className='flex justify-between items-center h-20 max-w-6xl mx-auto px-6'>
                <NavLink to="/">
                    <div className='flex items-center space-x-2'>
                        <div className='w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center'>
                            <span className='text-white font-bold text-sm'>S</span>
                        </div>
                        <span className='text-xl font-medium text-gray-900'>Store</span>
                    </div>
                </NavLink>
                
                <div className='flex items-center font-medium text-gray-700 space-x-8'>
                    <NavLink to="/" className="hover:text-gray-900 transition-colors">
                        <span>Home</span>
                    </NavLink>

                    <NavLink to="/cart" className="relative hover:text-gray-900 transition-colors">
                        <div className='relative'>
                            <ShoppingCart className='w-6 h-6'/>
                            {cart.length > 0 && (
                                <span className='absolute -top-2 -right-2 bg-gray-900 text-white text-xs w-5 h-5 flex justify-center items-center rounded-full font-medium'>
                                    {cart.length}
                                </span>
                            )}
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar