import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import ExternalLink from '../components/ExternalLink';

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
  border: 2px solid rgb(200, 200, 200);
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
  border: 2px solid white;
  border-radius: 10px;
  padding: 8px;
  width: 100px;
`;

const ExternalLinks = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 40px;
  width: 110px;
`;

const MainPage = ({ data }) => (
  <MainWrapper>
    <MainContent>
      <Headshot fixed={data.headshot.childImageSharp.fixed} />
      <ExternalLinks>
        <ExternalLink
          fixed={data.github.childImageSharp.fixed}
          href="https://github.com/jpcastberg"
        />
        <ExternalLink
          fixed={data.linkedin.childImageSharp.fixed}
          href="https://linkedin.com/in/jpcastberg"
        />
      </ExternalLinks>
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
    github: file(relativePath: { eq: "images/github.png" }) {
      childImageSharp {
        fixed(width: 40, height: 40) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    linkedin: file(relativePath: { eq: "images/linkedin.png" }) {
      childImageSharp {
        fixed(width: 40, height: 40) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

MainPage.propTypes = {
  data: propTypes.shape({
    headshot: propTypes.object,
    github: propTypes.object,
    linkedin: propTypes.object,
  }),
};

MainPage.defaultProps = {
  data: {
    headshot: {},
    github: {},
    linkedin: {},
  },
};

export default MainPage;
