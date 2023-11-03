import { FC } from 'react';
import Counter from '../Counter/Counter.tsx';
import { IIngredient } from '../../types';
import Button from '../Button/Button.tsx';

const Ingredient: FC<IIngredient> = ({ name, image, onChangeCount, sendCount }) => {
  const imgStyle = {
    width: '100px',
    height: '100px',
  };

  return (
    <div className="d-flex justify-content-between align-items-center">
      <img style={imgStyle} src={image} alt={name} />
      <span>{name}</span>
      <div>
        <Button innerText="Add" onClick={() => onChangeCount?.(name, true, false)} />
        <Counter count={sendCount?.(name)} />
        <Button innerText="Remove" onClick={() => onChangeCount?.(name, false, false)} />
        <Button style="ms-2 btn-close" onClick={() => onChangeCount?.(name, false, true)} />
      </div>
    </div>
  );
};

export default Ingredient;
