import {FC} from 'react';

const Ingredient: FC<Ingredient> = ({name, price, image}) => {

  const imgStyle = {
    width: '100px',
    height: '100px'
  }

  return (
    <div className="d-flex justify-content-between align-items-center">
        <img style={imgStyle} src={image} alt={name}/>
      <span>{name}</span>
      <div>
        <button type="button" className="btn btn-primary">Increase</button>
        <button type="button" className="btn btn-primary">Decrease</button>
        <button type="button" className="btn-close" aria-label="Close"></button>
      </div>
    </div>
  );
};

export default Ingredient;