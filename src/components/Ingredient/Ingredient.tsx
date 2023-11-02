import {FC} from 'react';
import Counter from '../Counter/Counter.tsx';
import { IIngredient } from '../../types';
import Button from '../Button/Button.tsx';

const Ingredient: FC<IIngredient> = ({name, price, image, onChangeCount}, count) => {

  const imgStyle = {
    width: '100px',
    height: '100px'
  }

  return (
    <div className="d-flex justify-content-between align-items-center">
        <img style={imgStyle} src={image} alt={name}/>
      <span>{name}</span>
      <div>
        <Button innerText="Add" onClick={() => onChangeCount?.(name, true)}/>
        <Counter count={4}/>
        <Button innerText="Remove" onClick={() => onChangeCount?.(name, false)}/>
        <button type="button" className="btn-close" aria-label="Close"></button>
      </div>
    </div>
  );
};

export default Ingredient;