import React, { useContext } from 'react';
import styled from 'styled-components';

import { ProductContext } from '../../context/context';

const SideCart = () => {
  const { cartOpen, closeCart, cart } = useContext(ProductContext);
  return (
    <CartWrapper show={cartOpen} onClick={closeCart}>
      <h3>Cart Items</h3>
    </CartWrapper>
  );
};

const CartWrapper = styled.div`
  position: fixed;
  top: 61px;
  right: 0;
  width: 100%;
  height: 100%;
  background: var(--mainGrey);
  z-index: 1;
  border-left: 3px solid var(--primaryColor);
  transition: var(--mainTransition);
  transform: ${(props) => (props.show ? 'translateX(0)' : 'translateX(100%)')};

  @media screen and (min-width: 576px) {
    width: 20rem;
  }
`;

export default SideCart;
