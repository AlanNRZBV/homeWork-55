import '../../customStyles/burger.css';
import meatImg from '../../assets/ingredients/meatImg.png';
import baconImg from '../../assets/ingredients/baconImg.png';
import cheeseImg from '../../assets/ingredients/cheeseImg.png';
import saladImg from '../../assets/ingredients/saladImg.png';
import { useEffect, useState } from 'react';
import Ingredient from '../../components/Ingredient/Ingredient.tsx';
import Topping from '../../components/Topping/Topping.tsx';
import { IBill, IIngredient, ITopping } from '../../types';
import Bill from '../../components/Burger/Bill.tsx';

function App() {
  const [toppings, setToppings] = useState<ITopping[]>([
    { name: 'Meat', count: 0, price: 80 },
    { name: 'Cheese', count: 0, price: 50 },
    { name: 'Bacon', count: 0, price: 60 },
    { name: 'Salad', count: 0, price: 10 },
  ]);

  const [bill, setBill] = useState<IBill>({ total: 0 });

  useEffect(() => {
    calculateTotal();
  }, [toppings]);

  const Ingredients: IIngredient[] = [
    { name: 'Meat', image: meatImg },
    { name: 'Bacon', image: baconImg },
    { name: 'Cheese', image: cheeseImg },
    { name: 'Salad', image: saladImg },
  ];

  const changeCount = (type: string, behavior: boolean, reset: boolean) => {
    const toppingsCopy = [...toppings];
    const updatedToppings = toppingsCopy.map((topping) => {
      if (reset && topping.name === type) {
        return { ...topping, count: 0 };
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
    setToppings(updatedToppings);
  };

  const sendCount = (name: string) => {
    const topping = toppings.find((item) => item.name === name);
    return topping ? topping.count : 0;
  };

  const calculateTotal = () => {
    let total = 0;
    for (let i = 0; i < toppings.length; i++) {
      if (toppings[i].count > 0) {
        total += toppings[i].count * toppings[i].price;
      }
    }
    setBill({ total });
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col border border-1 me-2 text-center py-3">
          <span>Customize your burger</span>
          {Ingredients.map((ing, index) => (
            <Ingredient
              key={index}
              name={ing.name}
              image={ing.image}
              onChangeCount={changeCount}
              sendCount={sendCount}
            />
          ))}
        </div>
        <div className="col border border-1 ms-2">
          <div className="Burger">
            <div className="BreadTop">
              <div className="Seeds1"></div>
              <div className="Seeds2"></div>
            </div>
            {toppings.map((topping, index) => (
              <Topping key={index} name={topping.name} count={topping.count} price={topping.price} />
            ))}
            <div className="BreadBottom"></div>
          </div>
          <Bill total={bill.total} />
        </div>
      </div>
    </div>
  );
}

export default App;
