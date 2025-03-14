import React, { useState , useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Servicespage from './Pages/Servicespage';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Shop from './Pages/Shop';
import Cartpage from './Pages/Cartpage';
import { CartProvider } from './Components/CartContext';
import PetShop from './Components/PetShop';
import AdminPetShop from './Components/AdminPetShop';

const DynamicTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const routeTitles = {
      "/": "Home - Mac Buddy",
      "/about": "About - Mac Buddy",
      "/services": "Services - Mac Buddy",
      "/blog": "Blog - Mac Buddy",
      "/contact": "Contact - Mac Buddy",
      "/shop": "Shop - Mac Buddy",
      "/cart": "Cart - Mac Buddy",
      "/pets": "Pet Shop - Mac Buddy",
      "/petShop": "Admin Pet Shop - Mac Buddy",
    };

    document.title = routeTitles[location.pathname] || "Mac Buddy";
  }, [location]);

  return null;
};


const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };
  useState
  return (
  
    <CartProvider>
    <Router>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Servicespage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cartpage />} />
        <Route path="/pets" element={<PetShop />} />
        <Route path="/petShop" element={<AdminPetShop />} />
    </Routes>
    </Router>
    </CartProvider>
  )
}

export default App