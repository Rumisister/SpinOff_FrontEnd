import React from 'react';
import propTypes from 'prop-types';
import Icon from '@ant-design/icons';
import { Container } from './styles';

function LoadingState({ show }) {
  return (
    <>
      {show ? (
        <Container>
          <Icon type="loading" />
          <span>loading...</span>
        </Container>
      ) : null}
    </>
  );
}

LoadingState.propTypes = {
  show: propTypes.bool,
};

export default LoadingState;
