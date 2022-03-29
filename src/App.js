import React from 'react';

import Header from './components/Header';
import Drawer from './components/Drawer';
import Search from './components/Search';
import Card from './components/Card';

const App = () => {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);

  const [isCartOpened, setIsCartOpened] = React.useState(false);

  const onAddToCart = product => {
    setCartItems(prev => [...prev, product]);
  };

  React.useEffect(() => {
    fetch('https://624341cd3da3ac772b009b52.mockapi.io/items')
      .then(res => res.json())
      .then(json => setItems(json));
  }, []);

  return (
    <div className="wrapper clear">
      {isCartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setIsCartOpened(false)}
        />
      )}
      <Header onCartClick={() => setIsCartOpened(true)} />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <Search />
        </div>

        <div className="d-flex flex-wrap justify-around">
          {items.map((item, i) => (
            <Card
              title={item.title}
              price={item.price}
              img={item.img}
              onPlusClick={product => onAddToCart(product)}
              onFavoriteClick={() => console.log('h')}
              key={item.title + i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
