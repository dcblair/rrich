import React, { FC } from 'react';

interface IProps {
  style: string;
}

const Input = ({ style }: IProps): JSX.Element => {
  return <input className={style} />;
};

export default Input;
