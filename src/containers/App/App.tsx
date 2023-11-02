import '../../customStyles/burger.css';
import meatImg from '../../assets/ingredients/meatImg.png';
import baconImg from '../../assets/ingredients/baconImg.png';
import cheeseImg from '../../assets/ingredients/cheeseImg.png';
import saladImg from '../../assets/ingredients/saladImg.png';
import { useState } from 'react';
import Ingredient from '../../components/Ingredient/Ingredient.tsx';
import Topping from '../../components/Topping/Topping.tsx';
import { IIngredient, ITopping } from '../../types';

function App() {
  const [toppings, setToppings] = useState<ITopping[]>([
    { name: 'Meat', count: 0 },
    { name: 'Cheese', count: 0 },
    { name: 'Bacon', count: 0 },
    { name: 'Salad', count: 0 },
  ]);

  const Ingredients: IIngredient[] = [
    { name: 'Meat', price: 80, image: meatImg },
    { name: 'Bacon', price: 60, image: baconImg },
    { name: 'Cheese', price: 50, image: cheeseImg },
    { name: 'Salad', price: 10, image: saladImg },
  ];

  const changeCount = (type: string, behavior: boolean, reset: boolean) => {
    const toppingsCopy = [...toppings];
    const updatedToppings = toppingsCopy.map((topping) => {
      if ( reset && topping.name === type){
        return {...topping, count: 0}
      }
      if (topping.name === type) {
        if (behavior && topping.count < 10) {
          return { ...topping, count: topping.count + 1 };
        } else if (!behavior && topping.count > 0) {
          return { ...topping, count: topping.count - 1 };
        }
      }
      return topping;
    });
    console.log(updatedToppings);
    setToppings(updatedToppings);
  };

  const sendCount = (name: string) => {
    const topping = toppings.find((item) => item.name === name);
    return topping ? topping.count : 0;
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col border border-1 me-2">
          {Ingredients.map((ing, index) => (
            <Ingredient key={index} name={ing.name} price={ing.price} image={ing.image} onChangeCount={changeCount} sendCount={sendCount}/>
          ))}
        </div>
        <div className="col border border-1 ms-2">
          <div className="Burger">
            <div className="BreadTop">
              <div className="Seeds1"></div>
              <div className="Seeds2"></div>
            </div>
            {toppings.map((topping, index)=>(
              <Topping key={index} name={topping.name} count={topping.count}/>
            ))}
            <div className="BreadBottom"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
