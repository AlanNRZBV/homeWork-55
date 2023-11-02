import {FC} from 'react';
import { ITopping } from '../../types';

const Topping: FC<ITopping> = ({name, count}) => {

  return (
    <>
      {Array.from({ length: count }, (_, index) => (
        <div key={index} className={name}></div>
      ))}
    </>
  );
};

export default Topping;