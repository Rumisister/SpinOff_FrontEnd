import React from 'react';
import { ListIndicator, TodayDocent } from '../../molecules';

import { Container, SideContainer } from './styles';

function Introduction() {
  return (
    <Container>
      <SideContainer>
        <ListIndicator />
      </SideContainer>
      <TodayDocent />
      <SideContainer />
    </Container>
  );
}

export default Introduction;
