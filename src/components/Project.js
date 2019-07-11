import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const ProjectArea = styled.div`
  border: thin solid white;
  width: 70%;
  padding: 10px;
  margin: 10px auto;
`;

const ProjectName = styled.h4`
  text-align: center;
`;

const ProjectImg = styled(Img)`
  display: inline-block;
`;

const ProjectDescription = styled.p`
  display: inline-block;
  text-align: center;
`;

const Project = ({ name, fixed, githubURL, liveURL, children }) => (
  <ProjectArea>
    <ProjectName>{name}</ProjectName>
    <ProjectImg fixed={fixed} />
    <ProjectDescription>{children}</ProjectDescription>
  </ProjectArea>
);

export default Project;
