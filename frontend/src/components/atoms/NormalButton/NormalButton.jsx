import React from 'react';
import Button from './styles';
import propTypes from 'prop-types';

function NormalButton({ onClick, type, Style, children, disabled }) {
  return (
    <Button Style={Style} onClick={onClick} type={type} disabled={disabled}>
      {children}
    </Button>
  );
}

NormalButton.propTypes = {
  onClick: propTypes.func,
  type: propTypes.string,
  Style: propTypes.object,
  children: propTypes.any,
  disabled: propTypes.bool,
};

export default NormalButton;
