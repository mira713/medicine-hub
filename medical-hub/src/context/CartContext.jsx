import { createContext, useEffect, useState } from "react";
export const CartContext = createContext();

const cCount = JSON.parse(localStorage.getItem("cartCount")) || 0;
const cProduct = JSON.parse(localStorage.getItem("cartProduct")) || [];

function CartContextProvider({ children }) {
  const [cartCount, setCartCount] = useState(cCount);
  const [cartProduct, setCartProduct] = useState(cProduct);

  useEffect(() => {
    localStorage.setItem("cartCount", JSON.stringify(cartCount));
  }, [cartCount]);

  useEffect(() => {
    localStorage.setItem("cartProduct", JSON.stringify(cartProduct));
  }, [cartProduct]);

  const handleCartCount = (val) => {
    setCartCount(cartCount + val);
  };

  const handleCartProduct = ({ ...p }) => {
    setCartProduct([...cartProduct, p]);
  };

  return (
    <CartContext.Provider
      value={{
        handleCartCount,
        handleCartProduct,
        setCartProduct,
        cartProduct,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
