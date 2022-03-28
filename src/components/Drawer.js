const Drawer = () => {
  return (
    <div style={{ display: 'none' }} className="overlay">
      <div className="drawer">
        <h2 className="d-flex align-center justify-between  mb-30">
          Корзина
          <img className="removeBtn cu-p" src="/img/btn-remove.svg" alt="btnRemoveIcon" />
        </h2>
        <div className="items flex">
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }}
              className="cartItemImg"></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>120 $</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="btnRemoveIcon" />
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }}
              className="cartItemImg"></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>120 $</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="btnRemoveIcon" />
          </div>
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>1000 $</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>50$</b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ
            <img src="/img/arrow.svg" alt="arrowIcon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
