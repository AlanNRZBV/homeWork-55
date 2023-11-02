import { FC } from 'react';
import { IButton } from '../../types';

const Button: FC<IButton> = ({ onClick, innerText }) => {
  return <button onClick={onClick} type="button" className="btn btn-primary">{innerText}</button>;
};

export default Button;
