import classes from "./Cart.module.css";
import { useContext } from "react";
import CartContext from "../store/CartContext";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartCtnx = useContext(CartContext);
  const totalAmount = `RS.${cartCtnx.totalAmount.toFixed(2)}`;
  console.log(totalAmount);

  const cartItemRemoveHandler = (id) => {
    cartCtnx.removeItem(id);
  };

  /*const cartItemAddHandler = (item) => {
    cartCtnx.addItem(item);
  };
  */

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtnx.items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          imageUrl={item.imageUrl}
          title={item.title}
          price={item.price}
          amount={item.amount}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          //onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
