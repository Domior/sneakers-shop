import logo from './static/logo.png'
import cartIcon from './static/cart.svg'
import userIcon from './static/user.svg'
import heartIcon from './static/heart.svg'
import plusIcon from './static/plus.svg'
import searchIcon from './static/search.svg'

import favouriteEmptyIcon from './static/favourite-empty.svg'
import favouriteFilledIcon from './static/favourite-filled.svg'

import btnPlusIcon from './static/btn-plus.svg'
import btnCheckedIcon from './static/btn-checked.svg'

import sneaker1 from './static/sneakers/1.jpg'
import sneaker2 from './static/sneakers/2.jpg'

const App = () => {
  return (
    <div className="wrapper clear">

      <header className="d-flex justify-between align-center p-40">

        <div className="d-flex align-center">
          <img className="mr-15" width={40} height={40} src={logo} alt="logo"/>
          <div>
            <h3 className="text-uppercase">Sneakers Shop</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
        
        <ul className="d-flex align-center">
          <li className="mr-30">
            <img className="mr-10" width={18} height={18} src={cartIcon} alt="cartIcon"/>
            <span>1205 $</span>
          </li>
          <li className="mr-30">
            <img width={18} height={18} src={heartIcon} alt="heartIcon"/>
          </li>
          <li>
            <img width={18} height={18} src={userIcon} alt="userIcon"/>
          </li>
        </ul>

      </header>

      <div className="content p-40">

        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex align-center">
            <img width={18} height={18} src={searchIcon} alt="searchIcon"/>
            <input placeholder="Поиск..."/>
          </div>
        </div>

        <div className="d-flex">

          <div className="card">
            <div className="favourite">
              <img src={favouriteEmptyIcon} alt="favourite"/>
            </div>
            <img width={133} height={112} src={sneaker1} alt="sneaker"/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>120 $</b>
              </div>
              <button className="button">
                <img width={11} height={11} src={plusIcon} alt="plusIcon"/>
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src={sneaker2} alt="sneaker"/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>120 $</b>
              </div>
              <button className="button">
                <img width={11} height={11} src={plusIcon} alt="plusIcon"/>
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default App;
