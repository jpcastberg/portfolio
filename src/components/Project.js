import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';

const ProjectArea = styled.div`
  @media screen and (min-width: 601px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 30px auto 35px;
    grid-template-areas:
      "img title"
      "img info"
      "links tech";
    justify-items: center;
    height: 250px;
  }
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    min-height: 70vh;
  }
  width: 85%;
  border: thin solid #ffffff;
  border-radius: 10px;
  padding: 10px 15px;
  margin: 10px auto;
  text-align: center;
`;

const ProjectName = styled.h3`
  grid-area: title;
  align-self: start;
`;

const ProjectImg = styled(Img)`
  grid-area: img;
  align-self: center;
`;

const Description = styled.div`
  grid-area: info;
  align-self: center;
  width: 95%;
`;

const TechUsed = styled.div`
  grid-area: tech;
  align-self: end;
  width: 95%;
  &::before {
    content: "Tech Used: "
  }
`;

const ProjectLinks = styled.div`
  grid-area: links;
  align-self: end;
  text-align: center;
`;

// eslint-disable-next-line object-curly-newline
const Project = ({ name, fixed, description, techUsed, links }) => (
  <ProjectArea>
    <ProjectName>{name}</ProjectName>
    <ProjectImg fixed={fixed} />
    <Description>
      {description}
    </Description>
    <TechUsed>
      {techUsed.map((tech, idx) => (
        <span key={tech}>{`${tech}${idx !== techUsed.length - 1 ? ', ' : ''}`}</span>
      ))}
    </TechUsed>
    <ProjectLinks>
      {links.map((link, idx) => {
        const linkElement = (<a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">{link.displayName}</a>);
        if (idx !== links.length - 1) {
          return (
            <span key={link.url}>
              {linkElement}
              <span>&nbsp;|&nbsp;</span>
            </span>
          );
        }
        return linkElement;
      })}
    </ProjectLinks>
  </ProjectArea>
);

Project.propTypes = {
  name: propTypes.string.isRequired,
  fixed: propTypes.shape({
    base64: propTypes.string.isRequired,
    height: propTypes.number.isRequired,
    src: propTypes.string.isRequired,
    srcSet: propTypes.string.isRequired,
    width: propTypes.number.isRequired,
  }).isRequired,
  description: propTypes.string.isRequired,
  techUsed: propTypes.arrayOf(
    propTypes.string.isRequired,
  ).isRequired,
  links: propTypes.arrayOf(
    propTypes.objectOf(
      propTypes.string.isRequired,
    ).isRequired,
  ).isRequired,
};

export default Project;
