import React from 'react';
import styled from 'styled-components';

import ContentWrapper from '../components/ContentWrapper';

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const fourZeroFour = () => (
  <ContentWrapper>
    <Center>
      <div>404</div>
      <br />
      <div>
        Oh no! Looks like that page doesn&apos;t exist.
      </div>
      <br />
      <a href="/">
        Go Back Home
      </a>
    </Center>
  </ContentWrapper>
);

export default fourZeroFour;
