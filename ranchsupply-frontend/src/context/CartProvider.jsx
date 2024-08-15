import { useEffect, useState } from "react";
import { createContext } from "react";
import {
  addItemToCart,
  removeItemFromCart,
  getCartByUserId,
  removeAllItemsFromCart,
} from "../services/CartService";
import { toast } from "react-toastify";

// Creating context for Cart
export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [cart, setCart] = useState(null);
  const [userId, setUserId] = useState(52);

  const fetchUserCart = async (userId) => {
    try {
      const data = await getCartByUserId(userId);
      setCart(data);
    } catch (error) {
      setCart({ items: [] });
    }
  };

  // add item to cart
  const addItem = async (data, next = () => {}) => {
    try {
      const response = await addItemToCart(data, userId);
      setCart(response);
      next();
    } catch (error) {
      console.error(error);
      toast.error("Error in adding item to cart", {
        position: "bottom-right",
      });
    }
  };

  // remove item from cart
  const removeItem = async (itemId) => {
    try {
      await removeItemFromCart(userId, itemId);
      const newCart = cart.items.filter((item) => item.cartItemId !== itemId);
      setCart({
        ...cart,
        items: newCart,
      });
    } catch (error) {
      toast.error("Error in removing item from cart", {
        position: "bottom-right",
      });
    }
  };

  // remove all items from cart
  const removeAllItems = async () => {
    try {
      const data = await removeAllItemsFromCart(userId);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (isLogin) {
      console.log("user logged in");
      fetchUserCart(userId);
    }
  }, [isLogin]);

  return (
    <CartContext.Provider
      value={{
        cart: cart,
        setCart: setCart,
        addItem: addItem,
        removeItem: removeItem,
        removeAllItems: removeAllItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
