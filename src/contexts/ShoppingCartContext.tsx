/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { ReactNode, createContext, useReducer } from "react";
import { ICoffee } from "../data/data";
import { shoppingCartReducer } from "../reducers/shopping-cart/reducer";
import { addNewItemAction, changeItemQuantityAction } from "../reducers/shopping-cart/actions";

interface ShoppingCartContextType {
  coffeeList: ICoffee[];
  addNewItem: (newItem: ICoffee) => void;
  changeItemQuantity: (itemId: string, quantity: number) => void;
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextType);

interface ShoppingCartContextProviderProps {
  children: ReactNode;
}

export function ShoppingCartContextProvider({
  children,
}: ShoppingCartContextProviderProps) {
  const [shoppingCartState, dispatch] = useReducer(shoppingCartReducer, {
    coffeeList: [],
  });

  const { coffeeList } = shoppingCartState;

  function addNewItem(newItem: ICoffee) {
    dispatch(addNewItemAction(newItem));
  }

  function changeItemQuantity(itemId: string, quantity: number) {
    dispatch(changeItemQuantityAction(itemId, quantity));
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        coffeeList,
        addNewItem,
        changeItemQuantity,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
