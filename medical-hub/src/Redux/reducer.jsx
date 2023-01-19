import {
  ADDCART,
  REMOVEITEM,
  COUPON,
  UPDATE,
  SETCART,
  EMPTYCART,
} from "./actionType";

const calcTotal = (temp) => {
  let sum = 0;
  sum = 0;
  temp.forEach((item) => {
    sum += item.price * item.quantity;
  });
  return sum;
};

export default function reducre(store, { type, payload, isRemoveButton }) {
  switch (type) {
    case ADDCART:
      let itemExist = false;
      if (payload.quantity === undefined) payload.quantity = 1;
      store.cartItems.forEach((item, index) => {
        if (payload.id === item.id) {
          itemExist = true;
          store.cartItems[index].quantity += 1;
        }
      });
      let temp = [];
      if (itemExist) temp = [...store.cartItems];
      else temp = [...store.cartItems, payload];
      return {
        cartItems: [...temp],
        totalBill: calcTotal(temp),
        couponDiscount: store.couponDiscount,
      };
    case REMOVEITEM:
      if (store.cartItems.length === 0) store.totalBill = 0;
      if (isRemoveButton) {
        let arr = [];
        store.cartItems.forEach((item) => {
          if (item.id !== payload.id) arr.push(item);
        });
        return {
          cartItems: [...arr],
          totalBill: calcTotal(arr),
          couponDiscount: store.couponDiscount,
        };
      } else {
        if (payload.quantity > 1) {
          let q = payload.quantity - 1;
          store.cartItems.forEach((item, index) => {
            if (item.id === payload.id) {
              store.cartItems[index].quantity -= 1;
            }
          });
          return {
            cartItems: [...store.cartItems],
            totalBill: calcTotal(store.cartItems),
            couponDiscount: store.couponDiscount,
          };
        } else {
          let arr = [];
          store.cartItems.forEach((item) => {
            if (item.id !== payload.id) arr.push(item);
          });
          return {
            cartItems: [...arr],
            totalBill: calcTotal(arr),
            couponDiscount: store.couponDiscount,
          };
        }
      }
    case COUPON:
      console.log("coupon discoutn store=", store);
      return { ...store, couponDiscount: payload };

    case EMPTYCART:
      return { ...store, cartItems: [], totalBilly: 0, couponDiscount: 0 };
    default:
      return store;
  }
}
