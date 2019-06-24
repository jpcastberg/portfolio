import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
  /* align-content: center; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100vw;
  height: 100vh;
`;

const Headshot = styled.img.attrs({
  src: 'https://jpcastberg-portfolio.s3-us-west-1.amazonaws.com/HEADSHOT(square).png'
})`
  border: 2px solid rgb(200, 200, 200);
  max-width: 220px;
  border-radius: 100%;
`;

const Text = styled.p`
  color: white;
`;


export default () => (
  <Main>
    <Headshot />
    <div>
      <Text>
        I'm John, a full stack developer from San Francisco, CA.
      </Text>
      <Text>
        I build websites using React and Node.
      </Text>
    </div>
  </Main>
);
