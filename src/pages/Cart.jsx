import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ShoppingBag, ArrowLeft } from "lucide-react";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="min-h-screen bg-gray-50">
      {cart.length > 0 ? (
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="mb-8">
            <h1 className="text-4xl font-light text-gray-900 mb-2">Shopping Cart</h1>
            <p className="text-gray-600">{cart.length} {cart.length === 1 ? 'item' : 'items'} in your cart</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                {cart.map((item, index) => (
                  <CartItem key={item.id} item={item} itemIndex={index} />
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sticky top-8">
                <h2 className="text-2xl font-light text-gray-900 mb-8">Order Summary</h2>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal ({cart.length} items)</span>
                    <span>${totalAmount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="border-t border-gray-100 pt-4">
                    <div className="flex justify-between text-xl font-medium text-gray-900">
                      <span>Total</span>
                      <span>${totalAmount.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-gray-900 text-white py-4 rounded-full font-medium hover:bg-gray-800 transition-colors duration-300 mb-4">
                  Proceed to Checkout
                </button>
                
                <Link to="/" className="flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-screen flex flex-col items-center justify-center px-6">
          <div className="text-center space-y-6">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
              <ShoppingBag className="w-10 h-10 text-gray-400" />
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl font-light text-gray-900">Your cart is empty</h1>
              <p className="text-gray-600">Looks like you haven't added anything to your cart yet</p>
            </div>
            <Link to="/">
              <button className="px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors duration-300">
                Start Shopping
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;