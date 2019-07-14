import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import ContentWrapper from '../components/ContentWrapper';
import { Heading, SubHeading } from '../components/Headings';
import techSkills from '../data/techSkills';

const TechList = styled.ul`
  display: inline;
  list-style: none;
`;

const InlineLI = styled.li`
  display: inline;
`;

const LinkedLI = ({ children, url }) => (
  <InlineLI>
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  </InlineLI>
);

LinkedLI.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(
      propTypes.node.isRequired,
    ).isRequired,
    propTypes.node.isRequired,
    propTypes.object.isRequired,
  ]).isRequired,
  url: propTypes.string.isRequired,
};

const generateFormattedSkills = skillType => (
  techSkills[skillType].map((skill, idx) => {
    const { name, url } = skill;
    const li = skill.url
      ? (<LinkedLI url={url}>{name}</LinkedLI>)
      : (<InlineLI>{name}</InlineLI>);
    const delimiter = idx !== techSkills[skillType].length - 1
      ? ', '
      : null;
    return (
      <span key={name}>
        {li}
        {delimiter}
      </span>
    );
  })
);

const About = () => (
  <>
    <Helmet title="About" />
    <ContentWrapper>
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
          {generateFormattedSkills('frontEnd')}
        </TechList>
        <br />
        <br />
        <h4 style={{ display: 'inline' }}>Server Side:&nbsp;</h4>
        <TechList style={{ display: 'inline' }}>
          {generateFormattedSkills('serverSide')}
        </TechList>
        <br />
        <br />
        <h4 style={{ display: 'inline' }}>Databases:&nbsp;</h4>
        <TechList style={{ display: 'inline' }}>
          {generateFormattedSkills('databases')}
        </TechList>
        <br />
        <br />
        <h4 style={{ display: 'inline' }}>Other:&nbsp;</h4>
        <TechList style={{ display: 'inline' }}>
          {generateFormattedSkills('other')}
        </TechList>
      </div>
    </ContentWrapper>
  </>
);

export default About;
