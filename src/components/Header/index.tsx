/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { MapPin, ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import logo from "../../assets/logo.png";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";
import { HeaderContainer, CartButton, LocationContainer } from "./styles";
import { NavLink, useNavigate } from "react-router-dom";
import { useHeader } from "./useHeader";

export function Header() {
  const { coffeeList } = useContext(ShoppingCartContext);

  const quantityCoffeeCount = coffeeList.reduce((acc, c) => {
    return acc + c.quantity;
  }, 0);

  const _navigate = useNavigate();
  const { location } = useHeader();

  return (
    <HeaderContainer>
      <NavLink to={"/"}>
        <img src={logo} />
      </NavLink>
      <nav>
        <LocationContainer>
          <MapPin size={24} weight="fill" />
          {location}
        </LocationContainer>
        <CartButton
          onClick={() => _navigate("/checkout")}
          disabled={!quantityCoffeeCount}
          quantityInShoppigCart={quantityCoffeeCount || 0}
        >
          <ShoppingCart size={24} weight="fill" />
        </CartButton>
      </nav>
    </HeaderContainer>
  );
}
