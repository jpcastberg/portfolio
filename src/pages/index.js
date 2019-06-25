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
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
`;

const NavLink = styled(Link)`
 width: 100%;
 `;

 const ExternalLinks = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    height: 50px;
 `;

const Text = styled.p`
  color: white;
`;

export default ({ data }) => (
  <Main>
    <Headshot fixed={data.headshot.childImageSharp.fixed} />
    <ExternalLinks>
      <ExternalLink
        fixed={data.github.childImageSharp.fixed}
        href="https://github.com/jpcastberg"
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
      <NavLink to='someotherpage'>Some Other page</NavLink>
      <NavLink to='someotherpage'>Some Other other page</NavLink>
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
  }
`
