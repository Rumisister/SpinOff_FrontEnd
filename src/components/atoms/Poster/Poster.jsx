import React from 'react';
import propTypes from 'prop-types';
import Image from './styles';

function Poster({ Style, src, alt = '' }) {
  return <Image Style={Style} src={src} alt={alt} />;
}

Poster.propTypes = {
  Style: propTypes.object,
  src: propTypes.string,
  alt: propTypes.string,
};

export default Poster;
