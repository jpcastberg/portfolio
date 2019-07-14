import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Fade from './Fade';


const NavArea = styled.div`
  position: fixed;
  width: 100%;
  height: 49px;
  background-color: #000000;
  border-bottom: thin solid #ffffff;
  z-index: 1;
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

class Nav extends React.Component {
  getCurrentPageName() {
    const { props: { pathname } } = this;
    return pathname.split('/')[1];
  }

  createNavItem(navDestination) {
    const currentPage = this.getCurrentPageName();
    let userFacingNavText;
    if (navDestination === '') {
      userFacingNavText = 'Main';
    } else {
      userFacingNavText = `${navDestination[0].toUpperCase()}${navDestination.slice(1)}`;
    }
    if (navDestination === currentPage) {
      return <span style={{ cursor: 'default' }}>{userFacingNavText}</span>;
    }
    return <Link to={`/${navDestination}`}>{userFacingNavText}</Link>;
  }

  render() {
    const { props: { pathname } } = this;
    return (
      <Fade pathname={pathname}>
        <NavArea>
          <NavContainer>
            <li>{this.createNavItem('')}</li>
            <li>{this.createNavItem('about')}</li>
            <li>{this.createNavItem('projects')}</li>
          </NavContainer>
        </NavArea>
      </Fade>
    );
  }
}

Nav.propTypes = {
  pathname: propTypes.string.isRequired,
};

export default Nav;
