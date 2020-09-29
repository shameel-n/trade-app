import * as types from "../actions/actionTypes";

export default function stockReducer(
  state = [
    {
      company: "Reliance",
      id: "RIL",
      price: "2000",
    },
    {
      company: "SBI",
      id: "SB",
      price: "200",
    },
    {
      company: "TCS",
      id: "tcs",
      price: "3000",
    },
  ],
  action
) {
  switch (action.type) {
    case types.CREATE_STOCK:
      return [...state, { ...action.stock }];
      break;

    default:
      return state;
  }
}
