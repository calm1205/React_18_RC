import React from 'react';
import { ButtonStyle } from './ButtonStyle';

export type ButtonProps = {
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <ButtonStyle {...props}>{children}</ButtonStyle>;
};
