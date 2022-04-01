import React from 'react';
import { Routes, Route } from 'react-router-dom';

import axios from 'axios';

import { AppContext } from './context';
import { API_URL } from './constants/api';

import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Orders from './pages/Orders';

import Header from './components/Header';
import Drawer from './components/Drawer';

const App = () => {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favoritesItems, setFavoritesItems] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(true);

  const [searchValue, setSearchValue] = React.useState('');

  const [isCartOpened, setIsCartOpened] = React.useState(false);

  React.useEffect(() => {
    async function fetchData() {
      const cartItemsRes = await axios.get(`${API_URL}/cart`);
      const favoriteItemsRes = await axios.get(`${API_URL}/favorites`);
      const itemsRes = await axios.get(`${API_URL}/items`);

      setIsLoading(false);

      setCartItems(cartItemsRes.data);
      setFavoritesItems(favoriteItemsRes.data);
      setItems(itemsRes.data);
    }

    fetchData();
  }, []);

  const onAddToCart = product => {
    if (cartItems.find(el => +el.id === +product.id)) {
      axios.delete(`${API_URL}/cart/${product.id}`);
      setCartItems(prev => prev.filter(item => +item.id !== +product.id));
    } else {
      axios.post(`${API_URL}/cart`, product);
      setCartItems(prev => [...prev, product]);
    }
  };

  const onRemoveFromCart = id => {
    axios.delete(`${API_URL}/cart/${id}`);
    setCartItems(prev => prev.filter(item => +item.id !== +id));
  };

  const onAddToFavorites = async product => {
    try {
      if (favoritesItems.find(el => +el.id === +product.id)) {
        axios.delete(`${API_URL}/favorites/${product.id}`);
        setFavoritesItems(prev =>
          prev.filter(item => +item.id !== +product.id),
        );
      } else {
        const { data } = await axios.post(`${API_URL}/favorites`, product);
        setFavoritesItems(prev => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в закладки');
    }
  };

  const isInCart = id => cartItems.some(item => +item.id === +id);

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        setCartItems,
        favoritesItems,
        onAddToFavorites,
        onAddToCart,
        isInCart,
        setIsCartOpened,
        isLoading,
        searchValue,
        setSearchValue,
      }}>
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
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
};

export default App;
