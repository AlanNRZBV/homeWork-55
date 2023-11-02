import  { FC } from 'react';
import { ICounter } from '../../types';

const Counter: FC<ICounter> = ({ count }) => {
  return <span className="mx-2">x {count}</span>;
};

export default Counter;