import React, { useState, useEffect } from 'react';
import { Search, Filter, Grid, List } from 'lucide-react';
import Product from '../components/Product';
import Spinner from '../components/Spinner';
import { products } from '../data';

const AllProducts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [sortBy, setSortBy] = useState('default');
    const [viewMode, setViewMode] = useState('grid');

    // Load products from local data
    useEffect(() => {
        // Simulate loading time for smooth UX
        const timer = setTimeout(() => {
            setPosts(products);
            setLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    // Get unique categories
    const categories = ['all', ...new Set(posts.map(product => product.category))];

    // Filter and sort products
    const filteredProducts = posts
        .filter(product => {
            const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
            return matchesSearch && matchesCategory;
        })
        .sort((a, b) => {
            switch (sortBy) {
                case 'price-low':
                    return a.price - b.price;
                case 'price-high':
                    return b.price - a.price;
                case 'name':
                    return a.title.localeCompare(b.title);
                case 'rating':
                    return b.rating.rate - a.rating.rate;
                default:
                    return 0;
            }
        });

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#1a0023] to-black">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#2d0036] via-[#1a0023] to-black text-white py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <h1 className="text-5xl font-light mb-4">All Products</h1>
                    <p className="text-xl text-gray-300">Discover our complete collection</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Filters and Search */}
                <div className="bg-white/10 backdrop-blur rounded-2xl p-6 mb-8">
                    <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                        {/* Search */}
                        <div className="relative flex-1 max-w-md">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-white/40"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        {/* Filters */}
                        <div className="flex gap-4 items-center">
                            {/* Category Filter */}
                            <select
                                className="px-4 py-3 bg-white/10 border border-white/20 rounded-full text-white focus:outline-none focus:border-white/40"
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                                {categories.map(category => (
                                    <option key={category} value={category} className="bg-gray-800 text-white">
                                        {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                                    </option>
                                ))}
                            </select>

                            {/* Sort Filter */}
                            <select
                                className="px-4 py-3 bg-white/10 border border-white/20 rounded-full text-white focus:outline-none focus:border-white/40"
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                            >
                                <option value="default" className="bg-gray-800">Default</option>
                                <option value="price-low" className="bg-gray-800">Price: Low to High</option>
                                <option value="price-high" className="bg-gray-800">Price: High to Low</option>
                                <option value="name" className="bg-gray-800">Name: A to Z</option>
                                <option value="rating" className="bg-gray-800">Highest Rated</option>
                            </select>

                            {/* View Mode Toggle */}
                            <div className="flex bg-white/10 rounded-full p-1">
                                <button
                                    className={`p-2 rounded-full transition ${viewMode === 'grid' ? 'bg-white/20 text-white' : 'text-gray-400'}`}
                                    onClick={() => setViewMode('grid')}
                                >
                                    <Grid className="w-5 h-5" />
                                </button>
                                <button
                                    className={`p-2 rounded-full transition ${viewMode === 'list' ? 'bg-white/20 text-white' : 'text-gray-400'}`}
                                    onClick={() => setViewMode('list')}
                                >
                                    <List className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Results Info */}
                <div className="mb-8">
                    <p className="text-gray-300">
                        Showing {filteredProducts.length} of {posts.length} products
                        {searchTerm && ` for "${searchTerm}"`}
                        {selectedCategory !== 'all' && ` in ${selectedCategory}`}
                    </p>
                </div>

                {/* Products Grid/List */}
                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <Spinner />
                    </div>
                ) : filteredProducts.length > 0 ? (
                    <div className={viewMode === 'grid' 
                        ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" 
                        : "space-y-6"
                    }>
                        {filteredProducts.map((post) => (
                            <div key={post.id} className="group">
                                <Product post={post} viewMode={viewMode} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-xl text-gray-300">No products found matching your criteria</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllProducts;