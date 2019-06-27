import React from 'react';
import { Helmet } from 'react-helmet';

import ContentWrapper from '../components/ContentWrapper';
import Transition from '../components/Transition';
import Nav from '../components/Nav';

export default ({ children, location, location: { pathname } }) => (
  <div>
    <Helmet
      title="John Castberg"
      meta={[
        { name: `description`, content: `A page to showcase John Castberg and his wondrous talents in software engineering` },
        { name: `keywords`, content: `web, software, development, portfolio, San Francisco` },
      ]}
    />
    <Nav location={location} />
    <Transition location={location}>
      <ContentWrapper main={pathname === '/'} >
        {children}
      </ContentWrapper>
    </Transition>
  </div>
);
