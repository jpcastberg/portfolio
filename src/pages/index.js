import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import ExternalLinks from '../components/ExternalLinks';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100vw;
  height: 100vh;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  min-height: 400px;
`;

const Headshot = styled(Img)`
  border: 2px solid #c8c8c8;
  border-radius: 100%;
  min-height: 220px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 280px;
  margin-top: 5px;
`;

const NavLink = styled(Link)`
  background-color: rgba(0, 0, 0, 0);
  text-align: center;
  text-decoration: none;
  border: 2px solid #ffffff;
  border-radius: 10px;
  padding: 8px;
  width: 100px;
`;

const MainPage = ({ data }) => (
  <>
    <Helmet title="John Castberg" />
    <MainWrapper>
      <MainContent>
        <Headshot fixed={data.headshot.childImageSharp.fixed} />
        <ExternalLinks />
        <div>
          <p>
            I&apos;m John, a full stack web developer from San Francisco, CA.
            <br />
            I build websites using React and Node.
          </p>
        </div>
        <Nav>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
        </Nav>
      </MainContent>
    </MainWrapper>

  </>
);

export const query = graphql`
  query {
    headshot: file(relativePath: { eq: "images/headshot_square.png" }) {
      childImageSharp {
        fixed(width: 220, height: 220) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

MainPage.propTypes = {
  data: propTypes.shape({
    headshot: propTypes.object.isRequired,
    email: propTypes.object.isRequired,
    github: propTypes.object.isRequired,
    linkedin: propTypes.object.isRequired,
    resume: propTypes.object.isRequired,
  }).isRequired,
};

export default MainPage;
