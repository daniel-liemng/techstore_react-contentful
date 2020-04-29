import React from 'react';
import { Link } from 'react-router-dom';

import Hero from '../components/Hero/Hero';
import Services from '../components/HomePage/Services';
import FeaturedProducts from '../components/HomePage/FeaturedProducts';

const HomePage = () => {
  return (
    <>
      <Hero title='awesome gadgets' max='true'>
        <Link to='/products' className='main-link mt-3'>
          our products
        </Link>
      </Hero>
      <Services />
      <FeaturedProducts />
    </>
  );
};

export default HomePage;
