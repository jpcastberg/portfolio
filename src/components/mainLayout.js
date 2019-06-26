import React from 'react';
import styled from 'styled-components';

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100vw;
  height: 100vh;
`;

export default ({ children }) => (
  <MainLayout>
    {children}
  </MainLayout>
);