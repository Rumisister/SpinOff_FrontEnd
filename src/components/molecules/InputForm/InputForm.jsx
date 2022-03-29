import React from 'react';
import propTypes from 'prop-types';
import { Input } from '../../atoms';
import { Container, InputContainer, Span } from './styles';

function InputForm({
  Style,
  onChange,
  name,
  InputName,
  value,
  placeholder,
  children,
}) {
  return (
    <Container>
      <Span>{InputName}</Span>
      <InputContainer>
        <Input
          Style={Style}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
        {children}
      </InputContainer>
    </Container>
  );
}

InputForm.propTypes = {
  Style: propTypes.object,
  onChange: propTypes.func,
  InputName: propTypes.string,
  value: propTypes.string,
  name: propTypes.string,
  placeholder: propTypes.string,
  children: propTypes.element,
};

export default InputForm;
