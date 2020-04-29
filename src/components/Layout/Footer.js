import React, { useContext } from 'react';
import styled from 'styled-components';

import { ProductContext } from '../../context/context';

const Footer = () => {
  const { socialIcons } = useContext(ProductContext);

  return (
    <FooterWrapper>
      <div className='container'>
        <div className='row p-3'>
          <div className='col-md-6'>
            <p className='text-capitalize'>
              copyright &copy; tech store {new Date().getFullYear()}. all rights
              reserved{' '}
            </p>
          </div>
          <div className='col-md-6 d-flex justify-content-around'>
            {socialIcons.map((icon) => (
              <a key={icon.id} href={icon.url}>
                {icon.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  background: var(--darkGrey);
  color: var(--mainWhite);

  .icon {
    font-size: 1.5rem;
    color: var(--mainWhite);
    transition: var(--mainTransition);
  }

  .icon:hover {
    color: var(--primaryColor);
    cursor: pointer;
  }
`;

export default Footer;
