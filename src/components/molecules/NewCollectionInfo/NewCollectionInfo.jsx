import React from 'react';
import propTypes from 'prop-types';
import { TextArea } from '../../atoms';
import { Container } from './styles';

function NewCollectionInfo({
  inputStyle,
  placeholder,
  value,
  onChange,
  name,
  children,
}) {
  return (
    <Container>
      <TextArea
        value={value}
        onChange={onChange}
        Style={inputStyle}
        placeholder={placeholder}
        name={name}
      />
      {children}
    </Container>
  );
}

NewCollectionInfo.propTypes = {
  inputStyle: propTypes.object,
  placeholder: propTypes.string,
  value: propTypes.string,
  onChange: propTypes.func,
  name: propTypes.string,
  children: propTypes.array,
};

export default React.memo(NewCollectionInfo);
