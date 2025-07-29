import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Heart, ArrowLeft, ShoppingBag } from 'lucide-react';
import Product from '../components/Product';

const Wishlist = () => {
    const { likedProducts } = useSelector((state) => state.like);

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#1a0023] to-black">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#2d0036] via-[#1a0023] to-black text-white py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center mb-4">
                        <Link to="/" className="flex items-center text-gray-300 hover:text-white transition-colors mr-4">
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            Back to Home
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <Heart className="w-8 h-8 text-red-500 mr-4" />
                        <div>
                            <h1 className="text-5xl font-light mb-2">My Wishlist</h1>
                            <p className="text-xl text-gray-300">
                                {likedProducts.length} {likedProducts.length === 1 ? 'item' : 'items'} in your wishlist
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12">
                {likedProducts.length > 0 ? (
                    <>
                        {/* Wishlist Items */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {likedProducts.map((product) => (
                                <div key={product.id} className="group">
                                    <Product post={product} />
                                </div>
                            ))}
                        </div>

                        {/* Summary Section */}
                        <div className="mt-16 bg-white/10 backdrop-blur rounded-2xl p-8">
                            <div className="text-center">
                                <h3 className="text-2xl font-light text-white mb-4">
                                    Total Wishlist Value
                                </h3>
                                <p className="text-4xl font-bold text-white mb-6">
                                    ${likedProducts.reduce((total, item) => total + item.price, 0).toFixed(2)}
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link to="/all-products">
                                        <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all duration-300">
                                            Continue Shopping
                                        </button>
                                    </Link>
                                    <Link to="/cart">
                                        <button className="px-8 py-4 bg-white/20 text-white border border-white/30 rounded-full font-medium hover:bg-white/30 transition-all duration-300">
                                            View Cart
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    /* Empty Wishlist */
                    <div className="text-center py-20">
                        <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8">
                            <Heart className="w-12 h-12 text-gray-400" />
                        </div>
                        <div className="space-y-4 mb-8">
                            <h2 className="text-3xl font-light text-white">Your wishlist is empty</h2>
                            <p className="text-xl text-gray-300 max-w-md mx-auto">
                                Start exploring and add items you love to your wishlist
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/">
                                <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all duration-300">
                                    Explore Products
                                </button>
                            </Link>
                            <Link to="/all-products">
                                <button className="px-8 py-4 bg-white/20 text-white border border-white/30 rounded-full font-medium hover:bg-white/30 transition-all duration-300 flex items-center">
                                    <ShoppingBag className="w-5 h-5 mr-2" />
                                    View All Products
                                </button>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Wishlist;