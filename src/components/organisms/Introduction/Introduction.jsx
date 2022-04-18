import React from 'react';
import { ListIndicator } from '../../molecules';

import { Container, SideContainer } from './styles';

function Introduction() {
  return (
    <Container>
      <SideContainer>
        <ListIndicator />
      </SideContainer>
    </Container>
  );
}

export default React.memo(Introduction);
