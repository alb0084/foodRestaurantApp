import { useContext, useEffect, useState } from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/Cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [btnIsHighlighted,setBtnIsHighlighted] = useState(false);
  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const {items} = cartCtx;
  useEffect(()=>{
    if(cartCtx.items.length===0){
      return;
    }
    const  timer = setTimeout(()=>{
      setBtnIsHighlighted(false);
     },300);

    setBtnIsHighlighted(true);
    return ()=>{
      clearTimeout(timer);
    }

  },[items])


  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;