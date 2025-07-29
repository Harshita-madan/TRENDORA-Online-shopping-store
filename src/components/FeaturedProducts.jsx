import React from 'react';
import Product from './Product';
import Spinner from './Spinner';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FeaturedProducts = ({ posts, loading }) => {
    const navigate = useNavigate();

    return (
        <section className="py-24 bg-gradient-to-r from-[#2d0036] via-[#1a0023] to-black text-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-600 text-sm font-medium mb-6">
                        Featured Collection
                    </div>
                    <h2 className="text-5xl font-light text-white mb-6 tracking-tight">
                        Trending Now
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                        Handpicked products that define modern lifestyle
                    </p>
                </div>
                
                {/* Products Grid */}
                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <Spinner />
                    </div>
                ) : posts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {posts.map((post) => (
                            <div key={post.id} className="group">
                                <Product post={post} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-xl text-gray-600">No featured products available</p>
                    </div>
                )}
                
                {/* View All Button */}
                {/* <div className="text-center mt-16">
                    <button 
                    className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-300">
                        View All Products
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                </div> */}
                <div className="text-center mt-16">
                    <button 
                        onClick={() => navigate('/all-products')}
                        className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-800 transition-all duration-300">
                        View All Products
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;