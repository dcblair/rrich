import React, { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

const Button = ({ children }: IProps): JSX.Element => {
  return <button>{children}</button>;
};

export default Button;
