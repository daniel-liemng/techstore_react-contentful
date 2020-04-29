import React from 'react';

import contactBG from '../images/contactBcg.jpeg';

import Contact from '../components/ContactPage/Contact';
import Hero from '../components/Hero/Hero';

const ContactPage = () => {
  return (
    <>
      <Hero img={contactBG} />
      <Contact />
    </>
  );
};

export default ContactPage;
