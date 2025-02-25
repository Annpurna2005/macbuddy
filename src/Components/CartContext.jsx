import { createContext, useContext, useState } from "react";

// Create Context
const CartContext = createContext();

// Custom Hook for using CartContext
export const useCart = () => useContext(CartContext);

// Provider Component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  
  

  // Add to Cart
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    alert("Added to Cart");
  };

  // Remove from Cart
  const removeFromCart = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
