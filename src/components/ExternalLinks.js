import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ExternalLinksArea = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 40px;
  width: 220px;
  transform: ${props => (props.footer ? 'scale(.75)' : null)}
`;

const ExternalLink = ({ fixed, href, email }) => {
  if (email) {
    return (
      <li>
        <a href={href}>
          <Img fixed={fixed} />
        </a>
      </li>
    );
  }
  return (
    <li>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <Img fixed={fixed} />
      </a>
    </li>
  );
};

ExternalLink.propTypes = {
  fixed: propTypes.shape({
    base64: propTypes.string.isRequired,
    height: propTypes.number.isRequired,
    src: propTypes.string.isRequired,
    srcSet: propTypes.string.isRequired,
    width: propTypes.number.isRequired,
  }).isRequired,
  href: propTypes.string.isRequired,
  email: propTypes.bool.isRequired,
};

const ExternalLinks = ({ footer }) => (
  <StaticQuery
    query={graphql`
      query {
        email: file(relativePath: { eq: "images/email.png" }) {
          childImageSharp {
            fixed(width: 40, height: 40) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        github: file(relativePath: { eq: "images/github.png" }) {
          childImageSharp {
            fixed(width: 40, height: 40) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        linkedin: file(relativePath: { eq: "images/linkedin.png" }) {
          childImageSharp {
            fixed(width: 40, height: 40) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        resume: file(relativePath: { eq: "images/resume.png" }) {
          childImageSharp {
            fixed(width: 32, height: 40) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <ExternalLinksArea footer={footer}>
        <ExternalLink
          fixed={data.email.childImageSharp.fixed}
          href="mailto:jpcastberg@gmail.com"
          email
        />
        <ExternalLink
          fixed={data.github.childImageSharp.fixed}
          href="https://github.com/jpcastberg"
        />
        <ExternalLink
          fixed={data.linkedin.childImageSharp.fixed}
          href="https://linkedin.com/in/jpcastberg"
        />
        <ExternalLink
          fixed={data.resume.childImageSharp.fixed}
          href="https://docs.google.com/document/d/1tLLfDaQDAu5_iWLsrZyVs939kTlc5T0z_zbV4c4jVQw/preview"
        />
      </ExternalLinksArea>
    )}
  />
);

ExternalLinks.propTypes = {
  data: propTypes.shape({
    email: propTypes.object.isRequired,
    github: propTypes.object.isRequired,
    linkedin: propTypes.object.isRequired,
    resume: propTypes.object.isRequired,
  }).isRequired,
  footer: propTypes.bool,
};

ExternalLinks.defaultProps = {
  footer: false,
};

export default ExternalLinks;
