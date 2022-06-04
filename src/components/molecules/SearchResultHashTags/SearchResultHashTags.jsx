import React from 'react';
import propTypes from 'prop-types';
import { Container, normalButtonStyle } from './styles';
import { NormalButton } from '../../atoms';
const colors = ['#2800ee', '#f24860', '#bc32ea', '#f9cf00', '#000000'];
function SearchResultHashTags({ contents }) {
  if (contents.length === 0) return null;
  return (
    <Container>
      {contents.map(tag => {
        const randColor = colors[Math.floor(Math.random() * 5)];
        return (
          <NormalButton
            key={tag.id}
            Style={{
              ...normalButtonStyle,
              border: `2px solid ${randColor}`,
            }}
          >
            {tag.content}
          </NormalButton>
        );
      })}
    </Container>
  );
}
SearchResultHashTags.propTypes = {
  contents: propTypes.array,
};

export default SearchResultHashTags;
