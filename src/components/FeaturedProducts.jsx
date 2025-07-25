import React from 'react';
import Product from './Product';
import Spinner from './Spinner';

const FeaturedProducts = ({ posts, loading }) => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-4">
                        ✨ Featured Collection
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Trending Now
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Handpicked products that are making waves in the market
                    </p>
                </div>
                
                {/* Products Grid */}
                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <Spinner />
                    </div>
                ) : posts.length > 0 ? (
                    <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {posts.map((post) => (
                            <div key={post.id} className="transform hover:scale-105 transition-transform duration-300">
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
                <div className="text-center mt-12">
                    <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
                        View All Products
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;