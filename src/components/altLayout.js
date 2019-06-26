import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import MainLayout from './mainLayout';

const NavArea = styled.div`
  position: sticky;
  top: 0px;
  width: 100%;
  height: 50px;
  border-bottom: thin solid white;
`;

const NavContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  float: right;
  width: 100%;
  height: 100%;
`;

const NavLink = styled(Link)`
  color: white;
`;

const createNavItem = (navItemName, currentPage) => {
  if (navItemName === currentPage) {
    return (
      <span>{navItemName}</span>
    );
  } else {
    return (
      <NavLink to={navItemName.toLowerCase()}>
        {navItemName}
      </NavLink>
    )
  }
}

export default ({ children, currentPage }) => (
  <div>
    <NavArea>
      <NavContainer>
          <li>
            <NavLink to='index'>Main</NavLink>
          </li>
          <li>
            {createNavItem('About', currentPage)}
          </li>
          <li>
            {createNavItem('Projects', currentPage)}
          </li>
      </NavContainer>
    </NavArea>
    <MainLayout>
      <div>
        Hello From Layout
        {children}
        <Link to="index">Main</Link>
      </div>
    </MainLayout>
  </div>
);
