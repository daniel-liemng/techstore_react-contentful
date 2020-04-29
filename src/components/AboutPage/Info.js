import React from 'react';

import Title from '../Utils/Title';

import aboutBG from '../../images/aboutBcg.jpeg';

const Info = () => {
  return (
    <section className='mt-4'>
      <div className='container'>
        <div className='row'>
          <div className='col-10 mx-auto col-md-6 my-3'>
            <img
              src={aboutBG}
              alt='about photo'
              className='img-fluid img-thumbnail'
              style={{ background: 'var(--darkGrey)' }}
            />
          </div>
          <div className='col-10 mx-auto col-md-6 my-3'>
            <Title title='about us' />
            <p className='text-lead text-muted my-3'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
              neque ipsa nam aperiam mollitia, dolorem non est tempora
              necessitatibus harum.
            </p>
            <p className='text-lead text-muted my-3'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
              neque ipsa nam aperiam mollitia, dolorem non est tempora
              necessitatibus harum.
            </p>
            <button
              className='main-link'
              type='button'
              style={{ marginTop: '2rem' }}
            >
              more info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
