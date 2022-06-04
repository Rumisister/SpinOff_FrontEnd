import React from 'react';
import propTypes from 'prop-types';
import Button from './styles';

function TextButton({ onClick, type, Style, children, someProp }) {
  //console.log(onClick);
  return (
    <Button Style={Style} onClick={onClick} type={type} someProp={someProp}>
      {children}
    </Button>
  );
}

TextButton.propTypes = {
  onClick: propTypes.func,
  type: propTypes.string,
  Style: propTypes.object,
  children: propTypes.any,
  someProp: propTypes.any,
};

export default TextButton;
