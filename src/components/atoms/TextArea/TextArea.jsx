import React from 'react';
import propTypes from 'prop-types';
import TextInput from './styles';

function TextArea({
  Style = {},
  value,
  onChange,
  onFocus,
  type,
  name,
  placeholder,
}) {
  return (
    <TextInput
      Style={Style}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      type={type}
      name={name}
      placeholder={placeholder}
    />
  );
}

TextArea.propTypes = {
  Style: propTypes.object,
  value: propTypes.string,
  onChange: propTypes.func,
  onFocus: propTypes.func,
  type: propTypes.string,
  name: propTypes.string,
  placeholder: propTypes.string,
};

export default TextArea;
