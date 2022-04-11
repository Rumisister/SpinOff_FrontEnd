import React from 'react';
import propTypes from 'prop-types';
import { Input } from '../../atoms';
import { Container } from './styles';

function NewCollectionTitle({
  inputStyle,
  placeholder,
  value,
  onChange,
  name,
}) {
  return (
    <Container>
      <Input
        value={value}
        onChange={onChange}
        Style={inputStyle}
        placeholder={placeholder}
        name={name}
      />
    </Container>
  );
}

NewCollectionTitle.propTypes = {
  inputStyle: propTypes.object,
  placeholder: propTypes.string,
  value: propTypes.string,
  onChange: propTypes.func,
  name: propTypes.string,
};

export default React.memo(NewCollectionTitle);
