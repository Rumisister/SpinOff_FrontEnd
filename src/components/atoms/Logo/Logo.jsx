import React from 'react';
import propTypes from 'prop-types';
import Icon from './styles';

function Logo({ onClick }) {
  return <Icon onClick={onClick} />;
}

Logo.propTypes = {
  onClick: propTypes.func,
};

export default Logo;
