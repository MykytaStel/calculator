import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Button = ({ title, ...props }) => {
  return (
    <button {...props} className="red-button">
      {title}
    </button>
  );
};

export default Button;

Button.propTypes = {
  title: PropTypes.string.isRequired,
};
