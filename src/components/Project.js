import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';

const ProjectArea = styled.div`
  @media screen and (min-width: 601px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 30px repeat(2, auto);
    grid-template-areas:
      "img title"
      "img info"
      "links .";
    justify-items: center;
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
  padding: 25px;
  margin: 10px auto;
`;

const ProjectName = styled.h3`
  grid-area: title;
  text-align: center;
`;

const ProjectImg = styled(Img)`
  grid-area: img;
`;

const ProjectInformation = styled.div`
  grid-area: info;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
`;

const ProjectLinks = styled.div`
  @media screen and (min-width: 601px){
    margin-top: 10px;
  }
  grid-area: links;
  text-align: center;
`;

// eslint-disable-next-line object-curly-newline
const Project = ({ name, fixed, description, techUsed, links }) => (
  <ProjectArea>
    <ProjectName>{name}</ProjectName>
    <ProjectImg fixed={fixed} />
    <ProjectInformation>
      <p>{description}</p>
      <br />
      <p>
      Tech Used:&nbsp;
        {techUsed.map((tech, idx) => (
          <span key={tech}>{`${tech}${idx !== techUsed.length - 1 ? ', ' : ''}`}</span>
        ))}
      </p>
    </ProjectInformation>
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
