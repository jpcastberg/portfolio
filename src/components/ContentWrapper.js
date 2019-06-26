import React from 'react';
import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100vw;
  ${({main}) => `height: ${main ? `100vh` : `calc(100vh - 50px);`}`}
`;
