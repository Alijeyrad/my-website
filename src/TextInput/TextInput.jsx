import React from 'react';
import PropTypes from 'prop-types';

function TextInput({ handleOnChange, type, placeholder }) {
  return (
    <input className="form-control d-block mt-2 p-2" type={type} onChange={handleOnChange} placeholder={placeholder} />
  );
}

TextInput.propTypes = {
  handleOnChange: PropTypes.func,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

TextInput.defaultProps = {
  handleOnChange: () => {},
  placeholder: '',
};

export default TextInput;
