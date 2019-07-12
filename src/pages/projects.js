import React from 'react';
import propTypes from 'prop-types';
import { graphql } from 'gatsby';

import ContentWrapper from '../components/ContentWrapper';
import { Heading } from '../components/Headings';
import Project from '../components/Project';

import projectsData from '../data/projects.json';

const Projects = ({ data }) => (
  <ContentWrapper>
    <Heading>Projects</Heading>
    {projectsData.map(project => (
      <Project
        key={project.name}
        name={project.name}
        fixed={data[project.imgName].childImageSharp.fixed}
        description={project.description}
        techUsed={project.techUsed}
        links={project.links}
      />
    ))}
  </ContentWrapper>
);

Projects.propTypes = {
  data: propTypes.objectOf(
    propTypes.object.isRequired,
  ).isRequired,
};

export const query = graphql`
  query {
    safeway: file(relativePath: { eq: "images/safeway.png" }) {
      childImageSharp {
        fixed(width: 220) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    portfolio: file(relativePath: { eq: "images/portfolio.png" }) {
      childImageSharp {
        fixed(width: 220) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default Projects;
