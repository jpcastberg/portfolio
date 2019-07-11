import React from 'react';
import { graphql } from 'gatsby';

import ContentWrapper from '../components/ContentWrapper';
import { Heading } from '../components/Headings';
import Project from '../components/Project';

const Projects = ({ data }) => (
  <ContentWrapper>
    <Heading>Projects</Heading>
    <Project name="Safeway Coupon Clipper" fixed={data.headshot.childImageSharp.fixed}>
      This is children
      <br/>
      Tech Used: doodley doo
    </Project>
  </ContentWrapper>
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

export default Projects;
