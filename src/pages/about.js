import React from 'react';

import ContentWrapper from '../components/ContentWrapper';

export default () => (
  <div>
    <div>
      ABOUT Outside content wrapper
    </div>
    <ContentWrapper>
      <div>This is the content within Content Wrapper</div>
    </ContentWrapper>
  </div>
);