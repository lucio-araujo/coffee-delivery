import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { CoffeeCardContainer } from "./styles";
import { ICoffee } from "../../data/data";
import { formatToBRL } from "../../utils/numberFormat-ptBR";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";
import { useContext, useState } from "react";

export function CoffeeCard(coffee: ICoffee) {
  const [quantity, setQuantity] = useState<number>(1);
  const { coffeeList, addNewItem, changeItemQuantity } =
    useContext(ShoppingCartContext);

  function decrement() {
    if (quantity === 1) {
      return;
    } else {
      setQuantity(quantity - 1);
    }
  }

  function increment() {
    setQuantity(quantity + 1);
  }

  function addCoffeeToContext() {
    const coffeeFounded = coffeeList.find(
      (item) => item.id === coffee.id
    );
    if (!coffeeFounded) {
      const coffeeToAdd: ICoffee = {
        ...coffee,
        quantity: quantity,
      };
      addNewItem(coffeeToAdd);
    } else {
      changeItemQuantity(coffeeFounded.id, coffeeFounded.quantity + quantity);
    }
    setQuantity(1);
  }

  return (
    <CoffeeCardContainer>
      <img src={coffee.imgURL} />
      <div className="characteristics">
        {coffee.characteristic.map((c) => {
          return (
            <span key={c} className="characteristic">
              {c}
            </span>
          );
        })}
      </div>
      <span className="type">{coffee.type}</span>
      <p>{coffee.description}</p>
      <footer>
        <div className="price">
          <span>R$</span>
          <span>{formatToBRL(coffee.price)}</span>
        </div>
        <div className="input-container">
          <Minus
            onClick={decrement}
            size={18}
            weight="bold"
            color="blueviolet"
          />
          <span>{quantity}</span>
          <Plus
            onClick={increment}
            size={18}
            weight="bold"
            color="blueviolet"
          />
        </div>
        <button>
          <ShoppingCart
            onClick={addCoffeeToContext}
            size={24}
            weight="fill"
            color="white"
          />
        </button>
      </footer>
    </CoffeeCardContainer>
  );
}
