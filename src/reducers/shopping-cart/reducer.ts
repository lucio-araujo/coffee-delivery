/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { ICoffee } from "../../data/data";
import { ActionTypes } from "./actions";

interface ShoppingCartState {
  coffeeList: ICoffee[];
}

export function shoppingCartReducer(state: ShoppingCartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_ITEM:
      return {
        ...state,
        coffeeList: [...state.coffeeList, action.payload.newItem],
      };
    case ActionTypes.CHANGE_ITEM_QUANTITY:
      return {
        ...state,
        coffeeList: state.coffeeList.map((coffee) => {
          if (coffee.id === action.payload.itemId) {
            return { ...coffee, quantity: action.payload.quantity };
          } else return coffee;
        }),
      };
    // case ActionTypes.REMOVE_ITEM_BY_ID:
    //   return {
    //     ...state,
    //     coffeeList: state.coffeeList.map((coffee) => {
    //       if (coffee.id === action.payload.itemId) {
    //         const coffeeToRemove = state.coffeeList.find(
    //           (coffee) => coffee.id === action.payload.id
    //         );
    //         return state.coffeeList.filter(
    //           (coffee) => coffee.id !== coffeeToRemove!.id
    //         );
    //       } else {
    //         return coffee;
    //       }
    //     }),
    //   };
    default:
      return state;
  }
}
