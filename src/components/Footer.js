import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import Fade from './Fade';
import ExternalLinks from './ExternalLinks';


const FooterArea = styled.div`
  height: 59px;
  border-top: thin solid #eeeeee;
  background-color: #000000;
  margin-top: 20px;
`;

const FooterContainer = styled.footer`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding:10px;
`;

const Copyright = styled.div`
  @media screen and (min-width: 601px) {
    font-size: .9rem;
  }
  @media screen and (max-width: 601px) {
    font-size: .8rem;
    min-width: 200px;
    padding-right: 8px;
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
