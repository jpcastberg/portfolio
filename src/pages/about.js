import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import { Heading, SubHeading } from '../components/Heading';

const Content = styled.div`
  position: relative;
  top: 50px;
  width: 90%;
  margin: 0px auto;
`;

const TechList = styled.ul`
  display: inline;
  list-style: none;
`;

const LinkedLI = ({ children, href }) => (
  <li style={{ display: 'inline' }}>
    <a
      style={{ color: 'white' }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  </li>
);

LinkedLI.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
    propTypes.object,
  ]),
  href: propTypes.string,
};

LinkedLI.defaultProps = {
  children: null,
  href: '',
};

export default () => (
  <Content>
    <Heading>About</Heading>
    <div>
      <p>
        I love creating scaleable, responsive, mobile-first web applications,
        discovering clever solutions to technical problems, and learning new
        technologies.
      </p>
      <br />
      <p>
        When I&apos;m not writing code, I enjoy bicycling around San Francisco,
        meeting new people to share ideas with, and playing bass guitar in my
        band, &quot;You&quot;.
      </p>
    </div>
    <br />
    <SubHeading>Technologies Used</SubHeading>
    <div>
      <h4 style={{ display: 'inline' }}>Front End:&nbsp;</h4>
      <TechList>
        <LinkedLI href="https://reactjs.org">React.js</LinkedLI>
        {', '}
        <LinkedLI href="https://www.gatsbyjs.org/">Gatsby.js</LinkedLI>
        {', '}
        <li style={{ display: 'inline' }}>HTML5/CSS/JS</li>
        {', '}
        <LinkedLI href="https://www.styled-components.com/">
          Styled Components
        </LinkedLI>
        {', '}
        <LinkedLI href="https://github.com/css-modules/css-modules">
          CSS Modules
        </LinkedLI>
        {', '}
        <LinkedLI href="https://jquery.com/">JQuery</LinkedLI>
      </TechList>
      <br />
      <br />
      <h4 style={{ display: 'inline' }}>Server Side:&nbsp;</h4>
      <TechList style={{ display: 'inline' }}>
        <LinkedLI href="https://nodejs.org/">Node.js</LinkedLI>
        {', '}
        <LinkedLI href="http://expressjs.com/">Express.js</LinkedLI>
        {', '}
        <li style={{ display: 'inline' }}>Restful APIs</li>
      </TechList>
      <br />
      <br />
      <h4 style={{ display: 'inline' }}>Databases:&nbsp;</h4>
      <TechList style={{ display: 'inline' }}>
        <LinkedLI href="https://www.mysql.com/">MySQL</LinkedLI>
        {', '}
        <LinkedLI href="https://www.mongodb.com/">MongoDB</LinkedLI>
        {', '}
        <LinkedLI href="https://riak.com/">Riak</LinkedLI>
      </TechList>
      <br />
      <br />
      <h4 style={{ display: 'inline' }}>Other:&nbsp;</h4>
      <TechList style={{ display: 'inline' }}>
        <LinkedLI href="https://git-scm.com/">Git</LinkedLI>
        {', '}
        <LinkedLI href="https://webpack.js.org/">Webpack</LinkedLI>
        {', '}
        <LinkedLI href="https://aws.amazon.com/">AWS (S3, EC2)</LinkedLI>
        {', '}
        <LinkedLI href="https://www.docker.com/">Docker</LinkedLI>
        {', '}
        <LinkedLI href="https://eslint.org/">ESLint</LinkedLI>
        {', '}
        <LinkedLI href="https://prettier.io/">Prettier</LinkedLI>
        {', '}
        <LinkedLI href="https://jestjs.io/">Jest</LinkedLI>
        {', '}
        <LinkedLI href="https://airbnb.io/enzyme/">Enzyme</LinkedLI>
        {', '}
        <LinkedLI href="https://developers.google.com/web/tools/puppeteer/">
          Puppeteer
        </LinkedLI>
        {', '}
        <LinkedLI href="https://mochajs.org/">Mocha</LinkedLI>
        {', '}
        <LinkedLI href="https://www.chaijs.com/">Chai</LinkedLI>
      </TechList>
    </div>
  </Content>
);
