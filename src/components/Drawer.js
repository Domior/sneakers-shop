const Drawer = ({ items = [], onClose }) => {
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
        <div className="items flex">
          {items.map(item => (
            <div className="cartItem d-flex align-center mb-20">
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
              />
            </div>
          ))}
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
