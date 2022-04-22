import React from 'react';
import propTypes from 'prop-types';
import { Container } from './styles';

function MasonryContainer({ children }) {
  return <Container>{children}</Container>;
}

MasonryContainer.propTypes = {
  children: propTypes.array,
};

export default MasonryContainer;
