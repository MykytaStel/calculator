// CustomInput.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const CustomInput = ({
  field,
  form: { touched, errors },
  label,
  placeholder,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleBlur = (e) => {
    setIsFocused(false);
    if (e.target.value) {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  };

  const showPlaceholder = isFocused && !isFilled;
  const isError = touched[field.name] && errors[field.name];

  return (
    <div className="input-wrapper">
      {label && (
        <label
          className={`floating-label ${isFocused || isFilled ? 'active' : ''} ${
            isError ? 'error' : ''
          }`}
          htmlFor={props.id || props.name}
        >
          {label}
        </label>
      )}
      <input
        className={`${isError ? 'input-error' : ''}`}
        placeholder={showPlaceholder ? placeholder : ''}
        {...props}
        onFocus={() => setIsFocused(true)}
        onBlur={handleBlur}
      />
      {isError && <div className="error-message">{errors[field.name]}</div>}
    </div>
  );
};

CustomInput.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.shape({
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
  }).isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
};

export default CustomInput;
