import  { FC } from 'react';
import { ICounter } from '../../types';

const Counter: FC<ICounter> = ({ count }) => {
  return <span >x {count}</span>;
};

export default Counter;