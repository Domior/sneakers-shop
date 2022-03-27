const App = () => {
  return (
    <div className="wrapper clear">
      <div className="overlay">
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

      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img className="mr-15" width={40} height={40} src="/img/logo.png" alt="logo" />
          <div>
            <h3 className="text-uppercase">Sneakers Shop</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>

        <ul className="d-flex align-center">
          <li className="mr-30">
            <img className="mr-10" width={18} height={18} src="/img/cart.svg" alt="cartIcon" />
            <span>1205 $</span>
          </li>
          <li className="mr-30">
            <img width={18} height={18} src="/img/heart.svg" alt="heartIcon" />
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" alt="userIcon" />
          </li>
        </ul>
      </header>

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex align-center">
            <img width={18} height={18} src="/img/search.svg" alt="searchIcon" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex">
          <div className="card">
            <div className="favorite">
              <img src="/img/favorite-empty.svg" alt="favorite" />
            </div>
            <img width={133} height={112} src="/img/sneakers/1.jpg" alt="sneaker" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>120 $</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plusIcon" />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/img/sneakers/2.jpg" alt="sneaker" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>120 $</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plusIcon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
