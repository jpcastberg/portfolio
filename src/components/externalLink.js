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
    base64: propTypes.string,
    height: propTypes.number,
    src: propTypes.string,
    srcSet: propTypes.string,
    width: propTypes.number,
  }),
  href: propTypes.string,
};

ExternalLink.defaultProps = {
  fixed: {},
  href: '',
};

export default ExternalLink;
