import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/Cart-provider";

function App() {
  const [cartIsShown,setCartIsShown] =useState(false);

  const shortCardHandler=()=>{
    setCartIsShown(true);
  };
  const hideCartHandler=()=>{
    setCartIsShown(false);
  };
  
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={shortCardHandler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
