import React from 'react';
import styled from 'styled-components';

import Title from '../Utils/Title';

const Contact = () => {
  return (
    <section className='py-5'>
      <div className='row'>
        <div className='col-10 mx-auto col-md-6 my-3'>
          <Title title='contact us' center />
          <form
            className='mt-4'
            action='https://formspree.io/daniel.liemng@gmail.com'
            method='POST'
          >
            <div className='form-group'>
              <input
                name='firstName'
                placeholder='john smith'
                type='text'
                className='form-control'
              />
            </div>
            <div className='form-group'>
              <input
                name='_replyto'
                placeholder='john@email.com'
                type='email'
                className='form-control'
              />
            </div>
            <div className='form-group'>
              <input
                name='subject'
                placeholder='important!!!'
                type='text'
                className='form-control'
              />
            </div>
            <div className='form-group'>
              <textarea
                name='message'
                className='form-control'
                placeholder='hello there buddy...'
                rows='5'
              ></textarea>
            </div>
            <div className='form-group'>
              <input
                type='submit'
                value='Send'
                className='form-control btn btn-primary'
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
