import '../../customStyles/burger.css';
import meatImg from '../../assets/ingredients/meatImg.png'
import baconImg from '../../assets/ingredients/baconImg.png'
import cheeseImg from '../../assets/ingredients/cheeseImg.png'
import saladImg from '../../assets/ingredients/saladImg.png'
import { useState } from 'react';
import Ingredient from '../../components/Ingredient/Ingredient.tsx';
function App() {

  const [ingredient, setIngredients] = useState([
    {name: 'Meat', count: 0},
    {name: 'Cheese', count: 0},
    {name: 'Bacon', count: 0},
    {name: 'Salad', count: 0},
  ])


  const Ingredients: Ingredient[] = [
    {name: 'Meat', price: 80, image:meatImg },
    {name: 'Bacon', price: 60, image:baconImg },
    {name: 'Cheese', price: 50, image:cheeseImg },
    {name: 'Salad', price: 10, image:saladImg}
  ]

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col border border-1 me-2">
          {Ingredients.map((ing, index)=>(
            <Ingredient key={index} name={ing.name} price={ing.price} image={ing.image}/>
          ))}
        </div>
        <div className="col border border-1 ms-2">
          <div className="Burger">
            <div className="BreadTop"></div>
            <div className="BreadBottom"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
