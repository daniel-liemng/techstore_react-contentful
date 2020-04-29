import React from 'react';

import Info from '../components/AboutPage/Info';
import Hero from '../components/Hero/Hero';

import aboutBG from '../images/aboutBcg.jpeg';

const AboutPage = () => {
  return (
    <>
      <Hero img={aboutBG} />
      <Info />
    </>
  );
};

export default AboutPage;
