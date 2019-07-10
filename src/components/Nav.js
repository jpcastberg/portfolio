import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'gatsby';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const NavArea = styled.div`
  position: fixed;
  width: 100%;
  height: 50px;
  background-color: black;
  border-bottom: thin solid white;
  visibility: ${props => (props.out ? 'hidden' : 'visible')};
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

const NavLink = styled(Link)`
  color: white;
`;
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      out: null,
    };
  }

  componentDidMount() {
    const {
      props: {
        location: { pathname },
      },
    } = this;
    if (pathname === '/') {
      this.setState({ out: true });
    } else if (pathname !== '/') {
      this.setState({ out: false });
    }
  }

  componentDidUpdate(prevProps) {
    const {
      state: { out },
      props: {
        location: { pathname: currentPage },
      },
    } = this;
    const {
      location: { pathname: prevPage },
    } = prevProps;
    if (prevPage === '/' && currentPage !== '/' && out === true) {
      this.setState({ out: false });
    } else if (prevPage !== '/' && currentPage === '/' && out === false) {
      this.setState({ out: true });
    }
  }

  createNavItem(navDestination) {
    const {
      props: {
        location: { pathname },
      },
    } = this;
    let userFacingNavText;
    if (navDestination === '/') {
      userFacingNavText = 'Main';
    } else {
      userFacingNavText = `${navDestination[1].toUpperCase()}${navDestination.slice(
        2
      )}`;
    }
    if (navDestination === pathname) {
      return <span style={{ cursor: 'default' }}>{userFacingNavText}</span>;
    } else {
      return <NavLink to={navDestination}>{userFacingNavText}</NavLink>;
    }
  }

  render() {
    const {
      state: { out },
    } = this;
    return (
      <NavArea out={out}>
        <NavContainer>
          <li>{this.createNavItem('/')}</li>
          <li>{this.createNavItem('/about')}</li>
          <li>{this.createNavItem('/projects')}</li>
        </NavContainer>
      </NavArea>
    );
  }
}
