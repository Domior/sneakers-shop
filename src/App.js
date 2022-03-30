import React from 'react';
import { Routes, Route } from 'react-router-dom';

import axios from 'axios';

import Home from './pages/Home';
import Favorites from './pages/Favorites';

import Header from './components/Header';
import Drawer from './components/Drawer';

const API_URL = 'https://624341cd3da3ac772b009b52.mockapi.io';

const App = () => {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favoritesItems, setFavoritesItems] = React.useState([]);

  const [searchValue, setSearchValue] = React.useState('');

  const [isCartOpened, setIsCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios.get(`${API_URL}/items`).then(res => {
      setItems(res.data);
    });

    axios.get(`${API_URL}/cart`).then(res => {
      setCartItems(res.data);
    });

    axios.get(`${API_URL}/favorites`).then(res => {
      setFavoritesItems(res.data);
    });
  }, []);

  const onAddToCart = product => {
    axios.post(`${API_URL}/cart`, product);
    setCartItems(prev => [...prev, product]);
  };

  const onRemoveFromCart = id => {
    axios.delete(`${API_URL}/cart/${id}`);
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const onAddToFavorites = async product => {
    try {
      if (favoritesItems.find(el => el.id === product.id)) {
        axios.delete(`${API_URL}/favorites/${product.id}`);
        setFavoritesItems(prev => prev.filter(item => item.id !== product.id));
      } else {
        const { data } = await axios.post(`${API_URL}/favorites`, product);
        setFavoritesItems(prev => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в закладки');
    }
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

      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onAddToCart={onAddToCart}
              onAddToFavorites={onAddToFavorites}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <Favorites
              items={favoritesItems}
              onAddToCart={onAddToCart}
              onAddToFavorites={onAddToFavorites}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
