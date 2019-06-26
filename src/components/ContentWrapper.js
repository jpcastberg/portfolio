import React from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100vw;
  height: calc(100vh - 50px); /* Adjustment for height of Nav bar */
`;

export default ({ children }) => (
  <ContentWrapper>
    {children}
  </ContentWrapper>
);