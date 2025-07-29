import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Mail, ArrowRight, Gift, Zap, Crown } from 'lucide-react';

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
        <section className="py-24 bg-gradient-to-r from-[#2d0036] via-[#1a0023] to-black text-white">
            <div className="max-w-4xl mx-auto px-6 text-center">
                {/* Content */}
                <div className="space-y-12">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-800 text-white text-sm font-medium">
                        <Mail className="w-4 h-4 mr-2" />
                        Stay Updated
                    </div>
                    
                    <div className="space-y-6">
                        <h2 className="text-5xl font-light text-white leading-tight tracking-tight">
                            Never Miss a great deal
                            {/* <span className="block font-medium">Great Deal</span> */}
                        </h2>
                        
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                            Subscribe to our newsletter for exclusive offers and early access to new collections
                        </p>
                    </div>
                    
                    {/* Newsletter Form */}
                    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                        <div className="flex gap-3">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="flex-1 px-6 py-4 rounded-full border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                            />
                            <button
                                type="submit"
                                className="px-6 py-4 bg-gray-400 text-white rounded-full font-medium hover:bg-gray-800 transition-colors duration-300 flex items-center"
                            >
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </form>
                    
                    {/* Features */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-16">
                        <div className="text-center space-y-4">
                            <div className="w-12 h-12 bg-purple-800 rounded-full flex items-center justify-center mx-auto">
                                <Gift className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-lg font-medium text-gray-200">Exclusive Deals</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">Access to subscriber-only discounts and early bird offers</p>
                        </div>
                        
                        <div className="text-center space-y-4">
                            <div className="w-12 h-12 bg-purple-800 rounded-full flex items-center justify-center mx-auto">
                                <Zap className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-lg font-medium text-gray-200">New Arrivals</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">Be the first to discover our latest product launches</p>
                        </div>
                        
                        <div className="text-center space-y-4">
                            <div className="w-12 h-12 bg-purple-800 rounded-full flex items-center justify-center mx-auto">
                                <Crown className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-lg font-medium text-gray-200">Premium Content</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">Curated content and shopping tips from our experts</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;