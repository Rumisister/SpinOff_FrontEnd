import React from 'react';
import InputArea from './styles';
import propTypes from 'prop-types';

function Input({ Style = {}, value, onChange, onFocus, type }) {
  return (
    <InputArea
      Style={Style}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      type={type}
    />
  );
}

Input.propTypes = {
  Style: propTypes.object,
  value: propTypes.string,
  onChange: propTypes.func,
  onFocus: propTypes.func,
  type: propTypes.string,
};

export default Input;
