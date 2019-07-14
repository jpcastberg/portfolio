import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import Fade from './Fade';
import ExternalLinks from './ExternalLinks';


const FooterArea = styled.div`
  height: 59px;
  border-top: thin solid #eeeeee;
  background-color: #000000;
  @media screen and (min-width: 601px) {
    padding: 10px 100px;
  }
  @media screen and (max-width: 601px) {
    padding: 10px;
  }
`;

const FooterContainer = styled.footer`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Copyright = styled.div`
  @media screen and (min-width: 601px) {
    font-size: .9rem;
  }
  @media screen and (max-width: 601px) {
    font-size: .7rem;
    min-width: 170px;
  }
  text-align: center;
`;

const Footer = ({ pathname }) => (
  <Fade pathname={pathname}>
    <FooterArea>
      <FooterContainer>
        <Copyright>
          Copyright ©
          {` ${new Date().getFullYear()} `}
          John Castberg
        </Copyright>
        <ExternalLinks footer />
      </FooterContainer>
    </FooterArea>
  </Fade>
);

Footer.propTypes = {
  pathname: propTypes.string.isRequired,
};

export default Footer;
