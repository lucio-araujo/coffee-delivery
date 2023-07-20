import { ICoffee } from "../../data/data";

export enum ActionTypes {
  ADD_NEW_ITEM = "ADD_NEW_ITEM",
  CHANGE_ITEM_QUANTITY = "CHANGE_ITEM_QUANTITY",
  REMOVE_ITEM_BY_ID = "REMOVE_ITEM_BY_ID",
}

export function addNewItemAction(newItem: ICoffee) {
  return {
    type: ActionTypes.ADD_NEW_ITEM,
    payload: { newItem },
  };
}

export function changeItemQuantityAction(itemId: string, quantity: number) {
  return {
    type: ActionTypes.CHANGE_ITEM_QUANTITY,
    payload: { itemId, quantity },
  };
}

// export function removeItemByIdAction(itemId: number) {
//   return {
//     type: ActionTypes.REMOVE_ITEM_BY_ID,
//     payload: { itemId },
//   };
// }
