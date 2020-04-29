import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { ProductContext } from '../../context/context';

const Sidebar = () => {
  const { links, sidebarOpen, handleSidebar } = useContext(ProductContext);

  return (
    <SidebarWrapper show={sidebarOpen}>
      <ul>
        {links.map((link) => (
          <li key={link.id} onClick={handleSidebar}>
            <Link to={link.path} className='sidebar-link'>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled.div`
  position: fixed;
  top: 61px;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--mainGrey);
  z-index: 1;
  border-right: 3px solid var(--primaryColor);
  transition: var(--mainTransition);
  transform: ${(props) => (props.show ? 'translateX(0)' : 'translateX(-100%)')};

  ul {
    list-style: none;
    padding: 0 !important;
  }

  .sidebar-link {
    display: block;
    font-size: 1.5rem;
    text-transform: capitalize;
    color: var(--mainBlack);
    padding: 0.5rem 1.5rem;
    background: transparent;
    transition: var(--mainTransition);
  }

  .sidebar-link:hover {
    background: var(--primaryColor);
    color: var(--mainWhite);
    padding: 0.5rem 1.5rem 0.5rem 2.5rem;
    text-decoration: none;
  }
  @media screen and (min-width: 576px) {
    width: 20rem;
  }
`;

export default Sidebar;
