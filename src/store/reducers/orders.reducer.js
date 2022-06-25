import { ordersTypes } from "../types";

const { GET_ORDERS, DELETE_ORDER } = ordersTypes;

const initialState = {
  orders: [],
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERS:
      return {
        ...state,
        orders: action.payload,
      };
    case DELETE_ORDER:
      return {
        ...state,
        orders: state.orders.filter((orders) => orders.id !== action.orderId),
      };
    default:
      return state;
  }
};

export default ordersReducer;
