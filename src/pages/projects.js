import React from 'react';

import ContentWrapper from '../components/ContentWrapper';
import { Heading } from '../components/Headings';

const Projects = () => (
  <ContentWrapper>
    <Heading>Projects</Heading>
    <div>
      <div>PROJECTS Outside content wrapper</div>
      <div>This is the content within Content Wrapper</div>
    </div>
  </ContentWrapper>
);

export default Projects;
