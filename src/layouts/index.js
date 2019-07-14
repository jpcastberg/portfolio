import React from 'react';
import propTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import Transition from '../components/Transition';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const siteDescription = 'A page to showcase John Castberg and his wondrous talents in software engineering.';

const Layout = ({ children, location: { pathname } }) => (
  <div>
    <Helmet
      meta={[
        {
          name: 'description',
          content: siteDescription,
        },
        {
          name: 'og:title',
          content: 'John Castberg',
        },
        {
          name: 'og:description',
          content: siteDescription,
        },
        {
          name: 'og:url',
          content: 'https://jpcastberg.github.io',
        },
        {
          name: 'keywords',
          content: 'web, software, development, portfolio, San Francisco',
        },
        {
          name: 'theme-color',
          content: '#323232',
        },
      ]}
    />
    <Nav pathname={pathname} />
    <Transition pathname={pathname}>{children}</Transition>
    <Footer pathname={pathname} />
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
