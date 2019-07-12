import React from 'react';
import propTypes from 'prop-types';
import Img from 'gatsby-image';

const ExternalLink = ({ fixed, href }) => (
  <li>
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Img fixed={fixed} />
    </a>
  </li>
);

ExternalLink.propTypes = {
  fixed: propTypes.shape({
    base64: propTypes.string.isRequired,
    height: propTypes.number.isRequired,
    src: propTypes.string.isRequired,
    srcSet: propTypes.string.isRequired,
    width: propTypes.number.isRequired,
  }).isRequired,
  href: propTypes.string.isRequired,
};

export default ExternalLink;
