import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/layouts/Header";
import AvailableProducts from "./components/products/AvailableProduct";
//import CartProvider from "./components/store/CartProvider";
import { CartContextProvider } from "./components/store/CartContext";
import Cart from "./components/cart/Cart";
import { useState } from "react";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import ProductDetails from "./components/pages/ProductDetails";
import UserProfile from "./components/profile/UserProfile";
import Login from "./components/pages/Login";
import LoginContext from "./components/store/LoginContext";

import { useContext } from "react";
const App = () => {
  const authCtx = useContext(LoginContext);
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  async function addUserDataHandler(details) {
    const response = await fetch(
      "https://react-ecommerce-4b392-default-rtdb.firebaseio.com/userData.json",
      {
        method: "POST",
        body: JSON.stringify(details),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }

  return (
    <CartContextProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <BrowserRouter>
        <Header onShowCart={showCartHandler} />

        <Switch>
          <Route path="/store">
            {authCtx.isLoggedIn && <AvailableProducts />}
            {!authCtx.isLoggedIn && <Redirect to="/login" />}
          </Route>

          <Route exact path="/about" component={About} />
          <Route exact path="/home" component={Home} />
          {!authCtx.isLoggedIn && (
            <Route exact path="/login">
              <Login onAddUserData={addUserDataHandler} />
            </Route>
          )}

          <Route exact path="/login" component={Login} />

          <Route path="/products/:productId">
            <ProductDetails />
          </Route>

          <Route path="/profile">
            {authCtx.isLoggedIn && <UserProfile />}
            {!authCtx.isLoggedIn && <Redirect to="/login" />}
          </Route>

          <Route path="*">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </BrowserRouter>
    </CartContextProvider>
  );
};

export default App;
