import React from 'react';
import propTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { Link } from 'gatsby';

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const fadeOut = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`;

const NavArea = styled.div`
  position: fixed;
  width: 100%;
  height: 50px;
  background-color: black;
  border-bottom: thin solid white;
  display: ${props => (props.out ? 'none' : 'block')};
  animation: ${props => (props.out ? fadeOut : fadeIn)} 0.3s linear;
  transition: visibility 0.3s linear;
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
    const currentPage = this.getCurrentPageName();
    const out = currentPage === '';
    return (
      <NavArea out={out}>
        <NavContainer>
          <li>{this.createNavItem('')}</li>
          <li>{this.createNavItem('about')}</li>
          <li>{this.createNavItem('projects')}</li>
        </NavContainer>
      </NavArea>
    );
  }
}

Nav.propTypes = {
  pathname: propTypes.string.isRequired,
};

export default Nav;
