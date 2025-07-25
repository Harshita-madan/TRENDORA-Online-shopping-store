import React from 'react';
import { ArrowRight, Play, Star, Users, Package, Award } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
            {/* Subtle Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 right-20 w-64 h-64 bg-blue-50 rounded-full opacity-60"></div>
                <div className="absolute bottom-20 left-20 w-48 h-48 bg-purple-50 rounded-full opacity-40"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full opacity-30"></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
                <div className="space-y-12">
                    {/* Badge */}
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        New Collection Available
                    </div>
                    
                    {/* Main Heading */}
                    <div className="space-y-6">
                        <h1 className="text-6xl md:text-7xl font-light text-gray-900 leading-tight tracking-tight">
                            Premium
                            <span className="block font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Shopping
                            </span>
                            Experience
                        </h1>
                        
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
                            Discover carefully curated products with exceptional quality and timeless design
                        </p>
                    </div>
                    
                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="group flex items-center px-8 py-4 bg-gray-900 text-white rounded-full font-medium transition-all duration-300 hover:bg-gray-800 hover:shadow-lg">
                            Explore Collection
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                        
                        <button className="flex items-center px-8 py-4 border border-gray-300 text-gray-700 rounded-full font-medium hover:border-gray-400 transition-all duration-300">
                            <Play className="mr-2 w-4 h-4" />
                            Watch Story
                        </button>
                    </div>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-12 pt-20 max-w-2xl mx-auto">
                        <div className="text-center space-y-2">
                            <div className="flex justify-center mb-3">
                                <Users className="w-6 h-6 text-gray-400" />
                            </div>
                            <div className="text-3xl font-light text-gray-900">10K+</div>
                            <div className="text-gray-500 text-sm font-medium">Happy Customers</div>
                        </div>
                        <div className="text-center space-y-2">
                            <div className="flex justify-center mb-3">
                                <Package className="w-6 h-6 text-gray-400" />
                            </div>
                            <div className="text-3xl font-light text-gray-900">500+</div>
                            <div className="text-gray-500 text-sm font-medium">Premium Products</div>
                        </div>
                        <div className="text-center space-y-2">
                            <div className="flex justify-center mb-3">
                                <Award className="w-6 h-6 text-gray-400" />
                            </div>
                            <div className="text-3xl font-light text-gray-900">99%</div>
                            <div className="text-gray-500 text-sm font-medium">Satisfaction Rate</div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="w-6 h-10 border border-gray-300 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;