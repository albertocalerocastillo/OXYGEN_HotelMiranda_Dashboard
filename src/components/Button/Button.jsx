import React from 'react';
import { StyledButton } from './ButtonStyles';

const Button = ({ color, style, children }) => {
  return (
    <StyledButton className={`${color} ${style}`}>
      {children}
    </StyledButton>
  );
};

export default Button;