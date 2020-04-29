import React from 'react';
import { Link } from 'react-router-dom';

import Hero from '../components/Hero/Hero';
import defaultBG from '../images/defaultBcg.jpeg';

const Default = () => {
  return (
    <>
      <Hero max='false' img={defaultBG} title='404'>
        <h2 className='text-uppercase'>page not found</h2>
        <Link to='/' className='main-link mt-3'>
          back to home
        </Link>
      </Hero>
    </>
  );
};

export default Default;
