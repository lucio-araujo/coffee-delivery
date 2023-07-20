import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  position: sticky;

  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    width: 12.5rem;
    height: 2.5rem;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const LocationContainer = styled.div`
  width: 9rem;
  height: inherit;
  border-radius: 8px;
  color: ${(props) => props.theme["purple-dark"]};
  background: ${(props) => props.theme["purple-light"]};

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: ${(props) => props.theme["purple"]};
  }
`;

interface ShoppingCartButtonProps {
  quantityInShoppigCart: number;
}

export const CartButton = styled.button<ShoppingCartButtonProps>`
  width: 3rem;
  height: inherit;
  border: 0;
  border-radius: 8px;
  color: ${(props) => props.theme["yellow-dark"]};
  background: ${(props) => props.theme["yellow-light"]};

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  &:before {
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;

    visibility: ${({ quantityInShoppigCart }) =>
      quantityInShoppigCart > 0 ? "visible" : "hidden"};
    content: "${({ quantityInShoppigCart }) => quantityInShoppigCart}";
    width: 1.25rem;
    height: 1.25rem;
    line-height: 1.25rem;
    font-size: 0.75rem;

    border-radius: 50%;

    background-color: ${({ theme }) => theme["yellow-dark"]};
    color: ${({ theme }) => theme["gray-100"]};

    text-align: center;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
