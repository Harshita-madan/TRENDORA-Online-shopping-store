import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard, Truck, Shield, CheckCircle } from 'lucide-react';
import { toast } from 'react-hot-toast';

const Checkout = () => {
    const { cart } = useSelector((state) => state);
    const navigate = useNavigate();
    const [orderPlaced, setOrderPlaced] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        postalCode: '',
        country: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        nameOnCard: ''
    });

    const totalAmount = cart.reduce((acc, curr) => acc + curr.price, 0);
    const shipping = 0; // Free shipping
    const tax = totalAmount * 0.1; // 10% tax
    const finalTotal = totalAmount + shipping + tax;

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate order processing
        setOrderPlaced(true);
        toast.success('Order placed successfully!');
        
        // Redirect to home after 3 seconds
        setTimeout(() => {
            navigate('/');
        }, 3000);
    };

    if (orderPlaced) {
        return (
            <div className="min-h-screen bg-gradient-to-r from-[#2d0036] via-[#1a0023] to-black flex items-center justify-center">
                <div className="text-center space-y-6 px-6">
                    <CheckCircle className="w-24 h-24 text-green-500 mx-auto" />
                    <h1 className="text-4xl font-bold text-white">Order Confirmed!</h1>
                    <p className="text-xl text-gray-300">Thank you for your purchase</p>
                    <p className="text-gray-400">Redirecting to home page...</p>
                </div>
            </div>
        );
    }

    if (cart.length === 0) {
        return (
            <div className="min-h-screen bg-gradient-to-r from-[#2d0036] via-[#1a0023] to-black flex items-center justify-center">
                <div className="text-center space-y-6 px-6">
                    <h1 className="text-3xl font-bold text-white">Your cart is empty</h1>
                    <Link to="/" className="inline-block px-8 py-4 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition">
                        Continue Shopping
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-r from-[#2d0036] via-[#1a0023] to-black">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#2d0036] via-[#1a0023] to-black text-white py-12">
                <div className="max-w-7xl mx-auto px-6">
                    <Link to="/cart" className="flex items-center text-gray-300 hover:text-white transition-colors mb-6">
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back to Cart
                    </Link>
                    <h1 className="text-4xl font-light">Checkout</h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Checkout Form */}
                    <div className="space-y-8">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Contact Information */}
                            <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                                <h2 className="text-2xl font-semibold text-white mb-6">Contact Information</h2>
                                <div className="space-y-4">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email address"
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-white/40"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Shipping Address */}
                            <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                                <h2 className="text-2xl font-semibold text-white mb-6">Shipping Address</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="First name"
                                        className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-white/40"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Last name"
                                        className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-white/40"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="address"
                                        placeholder="Address"
                                        className="md:col-span-2 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-white/40"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="city"
                                        placeholder="City"
                                        className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-white/40"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="postalCode"
                                        placeholder="Postal code"
                                        className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-white/40"
                                        value={formData.postalCode}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Payment Information */}
                            <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                                <h2 className="text-2xl font-semibold text-white mb-6">Payment Information</h2>
                                <div className="space-y-4">
                                    <input
                                        type="text"
                                        name="nameOnCard"
                                        placeholder="Name on card"
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-white/40"
                                        value={formData.nameOnCard}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="cardNumber"
                                        placeholder="Card number"
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-white/40"
                                        value={formData.cardNumber}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <div className="grid grid-cols-2 gap-4">
                                        <input
                                            type="text"
                                            name="expiryDate"
                                            placeholder="MM/YY"
                                            className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-white/40"
                                            value={formData.expiryDate}
                                            onChange={handleInputChange}
                                            required
                                        />
                                        <input
                                            type="text"
                                            name="cvv"
                                            placeholder="CVV"
                                            className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-white/40"
                                            value={formData.cvv}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors duration-300"
                            >
                                Complete Order
                            </button>
                        </form>
                    </div>

                    {/* Order Summary */}
                    <div className="space-y-6">
                        <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                            <h2 className="text-2xl font-semibold text-white mb-6">Order Summary</h2>
                            
                            {/* Cart Items */}
                            <div className="space-y-4 mb-6">
                                {cart.map((item) => (
                                    <div key={item.id} className="flex items-center space-x-4">
                                        <img src={item.image} alt={item.title} className="w-16 h-16 object-contain bg-white/10 rounded-lg p-2" />
                                        <div className="flex-1">
                                            <h3 className="text-white font-medium line-clamp-2">{item.title}</h3>
                                            <p className="text-gray-300">${item.price}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Price Breakdown */}
                            <div className="border-t border-white/20 pt-6 space-y-3">
                                <div className="flex justify-between text-gray-300">
                                    <span>Subtotal ({cart.length} items)</span>
                                    <span>${totalAmount.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-300">
                                    <span>Shipping</span>
                                    <span>Free</span>
                                </div>
                                <div className="flex justify-between text-gray-300">
                                    <span>Tax</span>
                                    <span>${tax.toFixed(2)}</span>
                                </div>
                                <div className="border-t border-white/20 pt-3">
                                    <div className="flex justify-between text-2xl font-semibold text-white">
                                        <span>Total</span>
                                        <span>${finalTotal.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Security Features */}
                        <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3 text-gray-300">
                                    <Shield className="w-5 h-5 text-green-500" />
                                    <span>Secure SSL encryption</span>
                                </div>
                                <div className="flex items-center space-x-3 text-gray-300">
                                    <Truck className="w-5 h-5 text-blue-500" />
                                    <span>Free shipping on all orders</span>
                                </div>
                                <div className="flex items-center space-x-3 text-gray-300">
                                    <CreditCard className="w-5 h-5 text-purple-500" />
                                    <span>Money-back guarantee</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;