import React from 'react';
import PropTypes from 'prop-types';
import MainTemplate from './templates/MainTemplate';

const Root = ({ children }) => {
  return <MainTemplate>{children}</MainTemplate>;
};

Root.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Root;
