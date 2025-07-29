import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { NavLink } from 'react-router-dom'; // Add this import

const Hero = () => {
    return (
        <section className="relative min-h-screen bg-gradient-to-r from-[#2d0036] via-[#1a0023] to-black flex items-center justify-center overflow-hidden pt-0 sm:pt-8 -mt-[10px]">
            {/* Decorative Circles */}
            <div className="absolute top-10 left-10 w-72 h-72 bg-purple-800 rounded-full opacity-30 blur-2xl"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-900 rounded-full opacity-30 blur-2xl"></div>

            {/* Main Content */}
            <div className="relative z-10 text-center px-6 max-w-4xl">
                {/* Badge */}
                <div className="inline-flex items-center px-6 py-2 rounded-full bg-white/10 text-gray-100 font-semibold mb-8 shadow -mt-[20px]">
                    <span className="w-3 h-3 bg-green-400 rounded-full mr-3 -mt-[10px]"></span>
                    New Collection Available
                </div>

                {/* Heading */}
                <h1 className="text-6xl sm:text-7xl font-extrabold text-gray-100 leading-tight mb-6">
                    Premium <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                        Shopping Experience
                    </span>
                </h1>

                {/* Subheading */}
                <p className="text-xl sm:text-2xl text-gray-300 max-w-2xl mx-auto font-light mb-10">
                    Discover exclusive products curated with exceptional quality and timeless design.
                </p>

                {/* Feature Highlights */}
                <div className="flex flex-wrap justify-center gap-6 mb-10">
                    <div className="bg-white/10 rounded-xl px-6 py-4 flex flex-col items-center min-w-[140px]">
                        <span className="text-2xl mb-2">🚚</span>
                        <span className="text-gray-100 font-semibold">Free Shipping</span>
                        <span className="text-gray-400 text-xs mt-1">On all orders</span>
                    </div>
                    <div className="bg-white/10 rounded-xl px-6 py-4 flex flex-col items-center min-w-[140px]">
                        <span className="text-2xl mb-2">💳</span>
                        <span className="text-gray-100 font-semibold">Secure Payment</span>
                        <span className="text-gray-400 text-xs mt-1">100% protected</span>
                    </div>
                    <div className="bg-white/10 rounded-xl px-6 py-4 flex flex-col items-center min-w-[140px]">
                        <span className="text-2xl mb-2">⭐</span>
                        <span className="text-gray-100 font-semibold">Top Rated</span>
                        <span className="text-gray-400 text-xs mt-1">Trusted by users</span>
                    </div>
                </div>

                {/* Buttons */}
                {/* <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                    <NavLink to="/">
                        <button className="group flex items-center px-8 py-4 bg-white/10 text-gray-100 rounded-full font-semibold text-lg hover:bg-white/20 transition-all">
                            Explore Collection
                            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </NavLink>
                    <NavLink to="/story">
                        <button className="flex items-center px-8 py-4 border border-gray-500 text-gray-100 rounded-full font-semibold text-lg hover:border-gray-400 transition-all">
                            <Play className="mr-3 w-5 h-5" />
                            Watch Story
                        </button>
                    </NavLink>
                </div> */}
            </div>
        </section>
    );
};

export default Hero;
