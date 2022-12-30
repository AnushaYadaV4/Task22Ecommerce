import "./ProductsDesign.css";
import ProductItemForm from "./ProductItemForm";
import classes from "./ProductItems.module.css";
import { useContext } from "react";
import CartContext from "../../store/CartContext";
import { Link } from "react-router-dom";

const ProductItems = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `RS.${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      imageUrl: props.imageUrl,
      title: props.title,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <div className={classes.div}>
          <Link to={`/products/${props.id}`}>
            <img src={props.imageUrl} />
          </Link>
        </div>
        <div className={classes.description}>{props.title}</div>
        <div className={classes.price}>{price}</div>
        <ProductItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default ProductItems;
