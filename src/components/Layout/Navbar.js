import React, { useContext } from 'react';
import styled from 'styled-components';

import { ProductContext } from '../../context/context.js';

import { FaBars, FaCartArrowDown } from 'react-icons/fa';
import logo from '../../images/logo.svg';

const Navbar = () => {
  const { cartItems, handleSidebar, handleCart } = useContext(ProductContext);
  return (
    <NavWrapper>
      <div className='nav-center'>
        <FaBars className='nav-icon' onClick={handleSidebar} />
        <img src={logo} alt='logo' />
        <div className='nav-cart'>
          <FaCartArrowDown className='nav-icon' onClick={handleCart} />
          <div className='cart-items'>{cartItems}</div>
        </div>
      </div>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1rem 1.5rem;
  background: var(--darkGrey);
  border-bottom: 3px solid var(--primaryColor);

  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1170px;
    margin: 0 auto;
  }

  .nav-icon {
    font-size: 1.5rem;
    color: var(--mainWhite);
    cursor: pointer;
    display: inline-block;
  }

  .nav-cart {
    position: relative;
  }

  .cart-items {
    position: absolute;
    top: -8px;
    right: -15px;
    color: var(--mainGrey);
    background: var(--primaryColor);
    padding: 0 0.6rem;
    border-radius: 50%;
    font-size: 0.85rem;
  }
`;

export default Navbar;
