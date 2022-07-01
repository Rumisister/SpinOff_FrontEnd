import React from 'react';
import propTypes from 'prop-types';
import { TextArea } from '../../atoms';
import { Container } from './styles';

function NewCollectionInfo({
  Style,
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
        Style={Style}
        placeholder={placeholder}
        name={name}
      />
      {children}
    </Container>
  );
}

NewCollectionInfo.propTypes = {
  Style: propTypes.object,
  placeholder: propTypes.string,
  value: propTypes.string,
  onChange: propTypes.func,
  name: propTypes.string,
  children: propTypes.array,
};

export default React.memo(NewCollectionInfo);
