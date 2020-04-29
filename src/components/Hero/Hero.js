import React from 'react';
import styled from 'styled-components';

import mainBG from '../../images/mainBcg.jpeg';

const Hero = ({ img, title, max, children }) => {
  return (
    <HeroWrapper max={max} img={img}>
      <div className='banner'>
        <h1 className='title'>{title}</h1>
        {children}
      </div>
    </HeroWrapper>
  );
};

const HeroWrapper = styled.div`
  text-align: center;
  color: var(--mainWhite);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${(props) => (props.max ? '100vh' : '60vh')};
  background: linear-gradient(var(--primaryRGBA), var(--primaryRGBA)),
    url(${(props) => props.img}) center/cover no-repeat;

  .title {
    font-size: 3.5rem;
    padding-top: 2rem;
    text-transform: uppercase;
    text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.5);
    letter-spacing: var(--mainSpacing);
  }
`;

Hero.defaultProps = {
  img: mainBG,
};

export default Hero;
