import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
  /* align-content: center; */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100vw;
  height: 100vh;
`;

const Text = styled.p`
  color: white;
`;

export default () => (
  <Main>
    <Text>Hello World!</Text>
  </Main>
);
