import React from 'react';
import InputArea from './styles';
import propTypes from 'prop-types';

function Input({
  Style = {},
  value,
  onChange,
  onFocus,
  type,
  name,
  placeholder,
  accept,
  multiple,
}) {
  return (
    <InputArea
      Style={Style}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      type={type}
      name={name}
      placeholder={placeholder}
      accept={accept}
      multiple={multiple}
    />
  );
}

Input.propTypes = {
  Style: propTypes.object,
  value: propTypes.string,
  onChange: propTypes.func,
  onFocus: propTypes.func,
  type: propTypes.string,
  name: propTypes.string,
  placeholder: propTypes.string,
  accept: propTypes.string,
  multiple: propTypes.bool,
};

export default Input;
