import { useSelector } from "react-redux";
import { createStore } from "redux";
import reducre from "./reducer";
import { loadState, saveState } from "./localStorage";
const persistedState = loadState();
export const store = createStore(
  reducre,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  let tb = store.getState().totalBill;
  if (store.getState().cartItems.length === 0) tb = 0;
  saveState({
    cartItems: store.getState().cartItems,
    totalBill: tb,
    couponDiscount: store.getState().couponDiscount,
  });
});
