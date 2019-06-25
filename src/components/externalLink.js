import React from 'react';
import Img from 'gatsby-image';

export default ({ fixed, href }) => (
  <li>
    <a href={href} target="_blank">
      <Img fixed={fixed} />
    </a>
  </li>
);