import React from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
  border-bottom: thin solid white;
  margin-bottom: calc(10px + .5vh);
`;

export default ({ children }) => (
  <Heading>
    {children}
  </Heading>
);
