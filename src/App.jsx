import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import { Route } from "react-router-dom";
import Home from "./pages/Home"
import Cart from "./pages/Cart"
// import Login from "./pages/Login"
// import Signup from "./pages/Signup"
import AllProducts from "./pages/AllProducts"
import Wishlist from "./pages/Wishlist"
import Checkout from "./pages/Checkout"

const App = () => {
  return (<div className="bg-white/80 backdrop-blur">
       <div className="bg-gradient-to-r from-[#2d0036] via-[#1a0023] to-black text-white">
        <Navbar/>
        </div>

        <div className="bg-slate-900 mx-auto">
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/cart' element={<Cart/>} />
            {/* <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} /> */}
            <Route path='/all-products' element={<AllProducts/>} />
            <Route path='/wishlist' element={<Wishlist/>} />
            <Route path='/checkout' element={<Checkout/>} />
          </Routes>
        </div>
        
  </div>)
};

export default App;
