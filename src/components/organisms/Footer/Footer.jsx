import React from 'react';
import { CreatePostModal } from '..';
import { Container, Help, IconContainer } from './styles';

function Footer() {
  return (
    <Container>
      <IconContainer>
        <CreatePostModal />
      </IconContainer>
      <IconContainer>
        <Help />
      </IconContainer>
    </Container>
  );
}

export default Footer;
