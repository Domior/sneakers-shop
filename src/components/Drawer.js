import React from 'react';
import axios from 'axios';

import { useCart } from '../hooks/useCart';

import CartInfo from './CartInfo';

const API_URL = 'https://624341cd3da3ac772b009b52.mockapi.io';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const Drawer = ({ items = [], onItemRemove, onClose }) => {
  const { cartItems, setCartItems, orderPrice, deliveryPrice } = useCart();

  const [isOrderCompleted, setIsOrderCompleted] = React.useState(false);
  const [orderId, setOrderId] = React.useState(null);

  const [isLoading, setIsLoading] = React.useState(false);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(`${API_URL}/orders`, {
        items: cartItems,
      });
      setOrderId(data.id);
      setIsOrderCompleted(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(`${API_URL}/cart/${item.id}`);
        await delay(1000);
      }
    } catch (error) {
      alert('Не удалось создать заказ');
    }

    setIsLoading(false);
  };

  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex align-center justify-between  mb-30">
          Корзина
          <img
            className="removeBtn cu-p"
            src="/img/btn-remove.svg"
            alt="closeIcon"
            onClick={onClose}
          />
        </h2>

        {items.length > 0 ? (
          <>
            <div className="items flex">
              {items.map(item => (
                <div
                  key={item.id}
                  className="cartItem d-flex align-center mb-20">
                  <div
                    style={{
                      backgroundImage: `url(${item.img})`,
                    }}
                    className="cartItemImg"></div>
                  <div className="mr-20 flex">
                    <p className="mb-5">{item.title}</p>
                    <b>{item.price} $</b>
                  </div>
                  <img
                    className="removeBtn"
                    src="/img/btn-remove.svg"
                    alt="btnRemoveIcon"
                    onClick={() => onItemRemove(item.id)}
                  />
                </div>
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Сумма заказа:</span>
                  <div></div>
                  <b>{orderPrice} $</b>
                </li>
                <li>
                  <span>Доставка:</span>
                  <div></div>
                  <b>{deliveryPrice} $</b>
                </li>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>{orderPrice + deliveryPrice} $</b>
                </li>
              </ul>
              <button
                className="greenButton"
                onClick={onClickOrder}
                disabled={isLoading}>
                Оформить заказ
                <img src="/img/arrow.svg" alt="arrowIcon" />
              </button>
            </div>
          </>
        ) : (
          <CartInfo
            title={isOrderCompleted ? 'Заказ оформлен!' : 'Корзина пустая'}
            description={
              isOrderCompleted
                ? `Ваш заказ №${orderId} будет передан курьерской доставке`
                : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
            }
            image={
              isOrderCompleted
                ? '/img/complete-order.jpg'
                : '/img/empty-cart.jpg'
            }
          />
        )}
      </div>
    </div>
  );
};

export default Drawer;
