import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Contact from './pages/ContactPage';
import Products from './pages/ProductsPage';
import SingleProduct from './pages/SingleProductPage';
import Cart from './pages/CartPage';
import Default from './pages/Default';

import Navbar from './components/Layout/Navbar';
import Sidebar from './components/Layout/Sidebar';
import SideCart from './components/Layout/SideCart';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <Router>
      {/* navbar, sidebar, cart, footer */}
      <Navbar />
      <Sidebar />
      <SideCart />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/cart' component={Cart} />
        <Route exact path='/products' component={Products} />
        <Route path='/products/:id' component={SingleProduct} />
        <Route component={Default} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
