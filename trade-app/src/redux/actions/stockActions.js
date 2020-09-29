import * as types from "./actionTypes";

export function createStock(stock) {
  //action is a js object - type + payload
  return { type: types.CREATE_STOCK, stock };
}
