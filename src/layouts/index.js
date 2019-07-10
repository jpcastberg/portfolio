import React from 'react';
import propTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import Transition from '../components/Transition';
import Nav from '../components/Nav';

const Layout = ({ children, location: { pathname } }) => (
  <div>
    <Helmet
      title="John Castberg"
      meta={[
        {
          name: 'description',
          content: 'A page to showcase John Castberg and his wondrous talents in software engineering',
        },
        {
          name: 'keywords',
          content: 'web, software, development, portfolio, San Francisco',
        },
      ]}
    />
    <Nav pathname={pathname} />
    <Transition pathname={pathname}>{children}</Transition>
  </div>
);

Layout.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
    propTypes.object,
  ]),
  location: propTypes.shape({
    pathname: propTypes.string,
  }),
};

Layout.defaultProps = {
  children: null,
  location: {
    pathname: '/',
  },
};

export default Layout;
