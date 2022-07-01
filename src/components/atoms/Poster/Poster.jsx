import React from 'react';
import propTypes from 'prop-types';
import Image from './styles';

function Poster({ Style, src, alt = '', onLoad }) {
  return <Image Style={Style} src={src} alt={alt} onLoad={onLoad} />;
}

Poster.propTypes = {
  Style: propTypes.object,
  src: propTypes.string,
  alt: propTypes.string,
  onLoad: propTypes.func,
};

export default React.memo(Poster);
