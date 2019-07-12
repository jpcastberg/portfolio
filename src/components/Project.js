import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const ProjectArea = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  grid-template-rows: 30px repeat(2, auto);
  grid-template-areas:
    "img title title"
    "img info info"
    "links . .";
  justify-items: center;
  border: thin solid white;
  padding: 10px;
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
  grid-area: links;
  text-align: center;
  margin: 5px 0px;
`;

const Project = ({ name, fixed, description, techUsed, links }) => (
  <ProjectArea>
    <ProjectName>{name}</ProjectName>
    <ProjectImg fixed={fixed} />
    <ProjectInformation>
      <p>{description}</p>
      <p>
      Tech Used:&nbsp;
        {techUsed.map((tech, idx) => (
          <span>{`${tech}${idx !== techUsed.length - 1 ? ', ' : ''}`}</span>
        ))}
      </p>
    </ProjectInformation>
    <ProjectLinks>
      {links.map((link, idx) => {
        const linkElement = (<a href={link.url} target="_blank" rel="noopener noreferrer">{link.displayName}</a>);
        if (idx !== links.length - 1) {
          return (
            <span>
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

export default Project;
