import React from 'react';
import styled from 'styled-components';
import faker from 'faker';

import Heading from '../components/Heading'

const Content = styled.div`
  position: relative;
  top: 50px;
  width: 90%;
  margin: 0px auto;
`;

const contentGenerator = (paragraphs) => {
  let content = '';
  for (let i = 0; i < paragraphs; i += 1) {
    content += faker.lorem.paragraphs();
  }
  return content;
}

export default () => (
    <Content>
      <Heading>About</Heading>
      {contentGenerator(20)}
    </Content>
);