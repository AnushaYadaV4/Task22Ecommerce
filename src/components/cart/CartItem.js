import classes from './CartItem.module.css';


const CartItem=(props)=>{

 
  const price=`${props.price.toFixed(2)}`;

  return(
    <div className={classes.div}>
      <img src={props.imageUrl} alt="Music Album"/>
      <span>{props.title}</span>
      <span>RS.{price}</span>
      <span>
        x{props.amount}
        <button className={classes.itembuttonremove} onClick={props.onRemove}>Remove</button>

        
      </span>
    </div>
  )
}

export default CartItem;