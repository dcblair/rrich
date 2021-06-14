import React, { FC, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

const Button: FC<IProps> = ({ children }: IProps) => {
  return <button>{children}</button>;
};

export default Button;
