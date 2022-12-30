import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import LoginContext from "./LoginContext";
//import product from "../pages/product";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  totalQuantity: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  purchased: () => {},
});

let initial = true;

export const CartContextProvider = (props) => {
  const [items, setItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const authCtx = useContext(LoginContext);
  const userEmailId = authCtx.email?.split(".").join("");
  const cleanUserEmailId = userEmailId?.split("@").join("");

  useEffect(() => {
    const fetchingItems = async () => {
      try {
        const res = await axios.get(
          `https://react-ecommerce-4b392-default-rtdb.firebaseio.com//${cleanUserEmailId}.json`
        );

        res.data === null ? setItems([]) : setItems(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchingItems();
  }, [cleanUserEmailId]);

  const addItemToCartHandler = (item) => {
    let hasItems = false;
    const newArr = [...items];
    console.log("ITEMS", newArr);
    console.log("newArr:", newArr);

    newArr.forEach((product, index) => {
      console.log("PRODUCT", product);
      if (product.id === item.id) {
        alert(`This item is already added to the cart`);

        hasItems = true;
        newArr[index].amount = newArr[index].amount + item.amount;
      }
    });
    if (hasItems) {
      setItems(newArr);
    } else {
      setItems([...items, item]);
    }
  };

  const removeItemFromCartHandler = (id) => {
    const newArr = [...items];

    console.log("newArr:", newArr);
    newArr.forEach((product, index) => {
      if (product.id === id) {
        if (product.amount === 1) {
          newArr.splice(index, 1);
          setItems(newArr);
        } else {
          product.amount--;
          setItems(newArr);
        }
      }
    });
  };

  useEffect(() => {
    const amountHandler = () => {
      if (!initial) {
        initial = true;
        return;
      }
      const newArr = [...items];

      const amount = newArr.reduce(
        (prev, curr) => (prev += curr.price * curr.amount),
        0
      );
      console.log("amout", amount);

      setTotalAmount(amount);
    };

    const quantityHandler = () => {
      if (!initial) {
        initial = true;
        return;
      }
      const newArr = [...items];
      const quantity = newArr.reduce((prev, curr) => curr.amount + prev, 0);
      setTotalQuantity(quantity);
    };
    amountHandler();
    quantityHandler();
  }, [items]);

  useEffect(() => {
    const addingItem = async () => {
      if (!initial) {
        initial = true;
        return;
      }
      try {
        const res = await axios.put(
          `https://react-ecommerce-4b392-default-rtdb.firebaseio.com//${cleanUserEmailId}.json`,
          items
        );
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    addingItem();
  }, [cleanUserEmailId, items]);

  const purchased = async () => {
    alert("your order has been placed");
    setItems([]);
    try {
      const res = await axios.delete(
        `https://react-ecommerce-4b392-default-rtdb.firebaseio.com//${cleanUserEmailId}.json`,
        items
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const cartContext = {
    items: items,
    totalAmount: totalAmount,
    addItem: addItemToCartHandler,
    totalQuantity: totalQuantity,
    removeItem: removeItemFromCartHandler,
    purchased: purchased,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
