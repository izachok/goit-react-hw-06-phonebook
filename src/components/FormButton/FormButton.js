import React from 'react';
import s from './FormButton.module.css';
import PropTypes from 'prop-types';

export default function FormButton({
  type = 'button',
  onClick,
  disabled = false,
  children,
  ...allyProps
}) {
  return (
    <button
      type={type}
      className={s.button}
      disabled={disabled}
      onClick={onClick}
      {...allyProps}
    >
      {children}
    </button>
  );
}

FormButton.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
};
