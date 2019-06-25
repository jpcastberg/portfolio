import React from 'react';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import ExternalLink from '../components/externalLink';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100vw;
  height: 100vh;
`;

const Headshot = styled(Img)`
  border: 2px solid rgb(200, 200, 200);
  border-radius: 100%;
  margin-bottom: 5px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 5px;
  width: 300px;
`;

const NavLink = styled(Link)`
  background-color: rgba(0, 0, 0, 0);
  color: white;
  text-align: center;
  text-decoration: none;
  border: 2px solid white;
  border-radius: 10px;
  padding: 8px;
  margin: 0px 5px;
  width: 100px;
`;

const ExternalLinks = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 50px;
  margin: 5px 0px;
  width: 150px;
`;

const Text = styled.p`
  color: white;
  margin: 5px 0px;
`;

export default ({ data }) => (
  <Main>
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
      <Text>
        I'm John, a full stack developer from San Francisco, CA.
      </Text>
      <Text>
        I build websites using React and Node.
      </Text>
    </div>
    <Nav>
      <NavLink to='someotherpage'>About</NavLink>
      <NavLink to='someotherpage'>Projects</NavLink>
    </Nav>
  </Main>
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
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    linkedin: file(relativePath: { eq: "images/linkedin.png" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
