import React from 'react';

import { AppContext } from '../context';

const CartInfo = ({ title, description, image }) => {
  const { setIsCartOpened } = React.useContext(AppContext);

  return (
    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
      <img
        className="mb-30"
        width="auto"
        height="auto"
        src={image}
        alt="Empty"
      />
      <h2 className="mb-15">{title}</h2>
      <p className="opacity-6">{description}</p>
      <button onClick={() => setIsCartOpened(false)} className="greenButton">
        <img src="/img/arrow.svg" alt="Arrow" />
        Вернуться назад
      </button>
    </div>
  );
};

export default CartInfo;
