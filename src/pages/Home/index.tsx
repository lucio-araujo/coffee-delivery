import { HomeContainer } from "./styles";
import imagem from "../../assets/imagem.png";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { CoffeeCard } from "../../components/CoffeeCard";
import { ICoffee, data } from "../../data/data";

const coffeeList: ICoffee[] = data;

export function Home() {

  return (
    <HomeContainer>
      <div className="info">
        <div>
          <p className="title">
            Encontre o café perfeito para qualquer hora do dia
          </p>
          <p className="subtitle">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <div className="differential">
            <p>
              <span className="icon shopping-cart">
                <ShoppingCart size={20} weight="fill" color="white" />
              </span>
              Compra simples e segura
            </p>
            <p>
              <span className="icon timer">
                <Package size={20} weight="fill" color="white" />
              </span>{" "}
              Embalagem mantém o café intacto
            </p>
            <p>
              <span className="icon package">
                <Timer size={20} weight="fill" color="white" />
              </span>
              Entrega rápida e rastreada
            </p>
            <p>
              <span className="icon coffee">
                <Coffee size={20} weight="fill" color="white" />
              </span>
              O café chega fresquinho até você
            </p>
          </div>
        </div>
        <div>
          <img src={imagem} />
        </div>
      </div>
      <div className="coffee-list">
        <span>Nossos Cafés</span>
        <div className="cards">
          {coffeeList.map((coffee) => {
            return (
              <CoffeeCard
                key={coffee.id}
                id={coffee.id}
                imgURL={coffee.imgURL}
                characteristic={coffee.characteristic}
                type={coffee.type}
                description={coffee.description}
                price={coffee.price}
                quantity={coffee.quantity}
              />
            );
          })}
        </div>
      </div>
    </HomeContainer>
  );
}
