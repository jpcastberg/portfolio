import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import ContentWrapper from '../components/ContentWrapper';
import Transition from '../components/Transition';

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
  width: 50%;
  max-width: 500px;
  min-width: 300px;
  height: 100%;
  margin: 0px auto;
`;

const NavLink = styled(Link)`
  color: white;
`;

const createNavItem = (navDestination, location) => {
  let userFacingNavText;
  if (navDestination === '/') {
    userFacingNavText = 'Main';
  } else {
    userFacingNavText = `${navDestination[1].toUpperCase()}${navDestination.slice(2)}`
  }
  if (navDestination === location.pathname) {
    return (
      <span style={{ cursor: 'default' }} >{userFacingNavText}</span>
    );
  } else {
    return (
      <NavLink to={navDestination}>
        {userFacingNavText}
      </NavLink>
    )
  }
}

export default ({ children, location }) => (
  <div>
    <NavArea>
      <NavContainer>
          <li>
            {createNavItem('/', location)}
          </li>
          <li>
            {createNavItem('/about', location)}
          </li>
          <li>
            {createNavItem('/projects', location)}
          </li>
      </NavContainer>
    </NavArea>
    <Transition location={location}>
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </Transition>
  </div>
);
