import React from 'react';
import { Link } from 'react-router-dom';

import { useCart } from '../hooks/useCart';

const Header = ({ onCartClick }) => {
  const { orderPrice } = useCart();

  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img
            className="mr-15"
            width={40}
            height={40}
            src="img/logo.png"
            alt="logo"
          />
          <div>
            <h3 className="text-uppercase">Sneakers Shop</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>

      <ul className="d-flex align-center">
        <li className="mr-30 cu-p" onClick={onCartClick}>
          <img
            className="mr-10"
            width={18}
            height={18}
            src="img/cart.svg"
            alt="cartIcon"
          />
          <span>{orderPrice} $</span>
        </li>
        <li className="mr-30">
          <Link to="/favorites">
            <img width={18} height={18} src="img/heart.svg" alt="heartIcon" />
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <img width={18} height={18} src="img/user.svg" alt="userIcon" />
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
