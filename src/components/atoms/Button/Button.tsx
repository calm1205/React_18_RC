import React from 'react';
import { ButtonStyle } from './ButtonStyle';

export type ButtonProps = {};

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return <ButtonStyle>{children}</ButtonStyle>;
};
