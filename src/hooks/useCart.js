import React from 'react';

import { AppContext } from '../context';

export const useCart = () => {
  const { cartItems, setCartItems } = React.useContext(AppContext);

  const orderPrice = cartItems.reduce((prev, el) => el.price + prev, 0);
  const deliveryPrice = (orderPrice * 5) / 100;

  return { cartItems, setCartItems, orderPrice, deliveryPrice };
};
