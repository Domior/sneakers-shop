import React from 'react';

import axios from 'axios';

import Header from './components/Header';
import Drawer from './components/Drawer';
import Card from './components/Card';

const App = () => {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);

  const [searchValue, setSearchValue] = React.useState('');

  const [isCartOpened, setIsCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios
      .get('https://624341cd3da3ac772b009b52.mockapi.io/items')
      .then(res => {
        setItems(res.data);
      });

    axios
      .get('https://624341cd3da3ac772b009b52.mockapi.io/cart')
      .then(res => {
        setCartItems(res.data);
      });
  }, []);

  const onAddToCart = product => {
    axios.post(
      'https://624341cd3da3ac772b009b52.mockapi.io/cart',
      product,
    );

    setCartItems(prev => [...prev, product]);
  };

  const onRemoveFromCart = id => {
    axios.delete(
      `https://624341cd3da3ac772b009b52.mockapi.io/cart/${id}`,
    );
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="wrapper clear">
      {isCartOpened && (
        <Drawer
          items={cartItems}
          onItemRemove={onRemoveFromCart}
          onClose={() => setIsCartOpened(false)}
        />
      )}
      <Header onCartClick={() => setIsCartOpened(true)} />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>
            {searchValue
              ? `Поиск по запросу: "${searchValue}"`
              : 'Все кроссовки'}
          </h1>
          <div className="search-block d-flex align-center">
            <img
              width={18}
              height={18}
              src="/img/search.svg"
              alt="searchIcon"
            />
            <input
              placeholder="Поиск..."
              value={searchValue}
              onChange={event => setSearchValue(event.target.value)}
            />
            {searchValue && (
              <img
                className="removeBtn"
                src="/img/btn-remove.svg"
                alt="clearBtn"
                onClick={() => setSearchValue('')}
              />
            )}
          </div>
        </div>

        <div className="d-flex flex-wrap justify-around">
          {items
            .filter(item =>
              item.title
                .toLowerCase()
                .includes(searchValue.toLowerCase()),
            )
            .map(item => (
              <Card
                title={item.title}
                price={item.price}
                img={item.img}
                onPlusClick={product => onAddToCart(product)}
                onFavoriteClick={() => console.log('h')}
                key={item.id}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default App;
