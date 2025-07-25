import React, { useEffect, useState } from 'react'
import Product from '../components/Product';   
import Spinner from '../components/Spinner';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import Newsletter from '../components/Newsletter';

const Home = () => {
    const API_URL = "https://fakestoreapi.com/products";
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([])

    async function fetchProductData() {
        setLoading(true);
        try {
            const res = await fetch(API_URL);
            const data = await res.json();
            setPosts(data);
        }
        catch (error) {
            console.log("error");
            setPosts([]);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchProductData();
    }, []);

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <Hero />
            
            {/* Featured Products Section */}
            <FeaturedProducts posts={posts.slice(0, 8)} loading={loading} />
            
            {/* All Products Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            All Products
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Discover our complete collection of premium products
                        </p>
                    </div>
                    
                    {loading ? (
                        <div className="flex justify-center items-center py-20">
                            <Spinner />
                        </div>
                    ) : posts.length > 0 ? (
                        <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                            {posts.map((post) => (
                                <Product key={post.id} post={post} />
                            ))}
                        </div>
                    ) : (
                        <div className='flex justify-center items-center py-20'>
                            <p className="text-xl text-gray-600">No products found</p>
                        </div>
                    )}
                </div>
            </section>
            
            {/* Newsletter Section */}
            <Newsletter />
        </div>
    )
}

export default Home