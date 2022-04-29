import React from 'react';
import PropTypes from 'prop-types';

function Button({ children, handleClick = () => {}, style }) {
  return <button style={style} className="btn btn-dark btn-lg" type="button" onClick={handleClick}>{children}</button>;
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  style: PropTypes.shape().isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
