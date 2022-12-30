import { NavLink } from "react-router-dom";

import "./Header.css";
import HeaderCartButton from "./HeaderButton";


const Header = (props) => {
  return (
    <div>
      <div className="flex shopping-card">
        <span>
          <NavLink to="/home" style={{fontWeight:'bold',color:'white'}}>HOME</NavLink>
          
        </span>
        <span>
          <NavLink to="/store" style={{fontWeight:'bold',color:'white'}}>STORE</NavLink>
        </span>
        <span>
          <NavLink to="/about" style={{fontWeight:'bold',color:'white'}}>ABOUT</NavLink>
        </span>

        <span>
          <NavLink to="/login" style={{fontWeight:'bold',color:'white'}}>LOGIN</NavLink>
        </span>
      

        <HeaderCartButton onClick={props.onShowCart}/>
        <br />
      </div>

    </div>
  )
};

export default Header;
