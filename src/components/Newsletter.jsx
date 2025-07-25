import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            toast.success('Thank you for subscribing!');
            setEmail('');
        } else {
            toast.error('Please enter a valid email address');
        }
    };

    return (
        <section className="py-20 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
            </div>
            
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Content */}
                <div className="space-y-8">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium">
                        📧 Stay Updated
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                        Never Miss a
                        <span className="block bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
                            Great Deal
                        </span>
                    </h2>
                    
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Subscribe to our newsletter and be the first to know about new products, exclusive offers, and special discounts.
                    </p>
                    
                    {/* Newsletter Form */}
                    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email address"
                                className="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                            />
                            <button
                                type="submit"
                                className="px-8 py-4 bg-white text-purple-900 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                            >
                                Subscribe
                            </button>
                        </div>
                    </form>
                    
                    {/* Features */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
                        <div className="text-center">
                            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🎯</span>
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">Exclusive Deals</h3>
                            <p className="text-gray-300 text-sm">Get access to subscriber-only discounts and early bird offers</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🚀</span>
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">New Arrivals</h3>
                            <p className="text-gray-300 text-sm">Be the first to discover our latest product launches</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">💎</span>
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">Premium Content</h3>
                            <p className="text-gray-300 text-sm">Receive curated content and shopping tips from our experts</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;