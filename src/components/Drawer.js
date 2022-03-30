const Drawer = ({ items = [], onItemRemove, onClose }) => {
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
                  className="cartItem d-flex align-center mb-20"
                  key={item.id}>
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
          </>
        ) : (
          <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img
              className="mb-30"
              width="120px"
              height="120px"
              src="/img/empty-cart.jpg"
              alt="Empty"
            />
            <h2 className="mb-15">Корзина пустая</h2>
            <p className="opacity-6">
              Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
            </p>
            <button onClick={onClose} className="greenButton">
              <img src="/img/arrow.svg" alt="Arrow" />
              Вернуться назад
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Drawer;
