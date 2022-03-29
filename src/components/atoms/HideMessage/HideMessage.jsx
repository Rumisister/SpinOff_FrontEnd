import React from 'react';
import propTypes from 'prop-types';
import { Container, Message } from './styles';

function HideMessage({ Shown, Comments, color }) {
  return (
    <Container Shown={Shown}>
      <Message color={color}>{Comments}</Message>
    </Container>
  );
}

HideMessage.propTypes = {
  Shown: propTypes.bool,
  Comments: propTypes.string,
  color: propTypes.string,
};
export default HideMessage;
