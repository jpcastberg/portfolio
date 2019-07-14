import React from 'react';
import propTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const fadeOut = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`;

const FadeArea = styled.div`
  display: ${props => (props.out ? 'none' : 'block')};
  animation: ${props => (props.out ? fadeOut : fadeIn)} 0.3s linear;
  transition: visibility 0.3s linear;
`;

class Fade extends React.Component {
  getCurrentPageName() {
    const { props: { pathname } } = this;
    return pathname.split('/')[1];
  }

  render() {
    const { props: { children } } = this;
    const currentPage = this.getCurrentPageName();
    const out = currentPage === '';
    return (
      <FadeArea out={out}>
        {children}
      </FadeArea>
    );
  }
}

Fade.propTypes = {
  pathname: propTypes.string.isRequired,
  children: propTypes.oneOfType([
    propTypes.arrayOf(
      propTypes.node.isRequired,
    ).isRequired,
    propTypes.node.isRequired,
    propTypes.object.isRequired,
  ]).isRequired,
};

export default Fade;
