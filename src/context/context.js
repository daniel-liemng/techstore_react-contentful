import React, { createContext, useState } from 'react';

import { linkData } from './linkData';
import { socialData } from './socialData';

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  // state
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState(21);
  const [links, setLinks] = useState(linkData);
  const [cart, setCart] = useState([]);
  const [socialIcons, setSocialIcons] = useState(socialData);

  // functions
  const handleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleCart = () => {
    console.log('cart');

    setCartOpen(!cartOpen);
  };

  const openCart = () => {
    setCartOpen(true);
  };

  const closeCart = () => {
    setCartOpen(false);
  };

  return (
    <ProductContext.Provider
      value={{
        sidebarOpen,
        cartOpen,
        cartItems,
        links,
        socialIcons,
        handleSidebar,
        handleCart,
        openCart,
        closeCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
