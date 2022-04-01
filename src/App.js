import React from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Orders from './pages/Orders';

import Header from './components/Header';
import Drawer from './components/Drawer';

import { AppContext } from './context';
import { API_URL } from './constants/api';

const App = () => {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favoritesItems, setFavoritesItems] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(true);

  const [searchValue, setSearchValue] = React.useState('');

  const [isCartOpened, setIsCartOpened] = React.useState(false);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const [cartItemsRes, favoriteItemsRes, itemsRes] = await Promise.all([
          axios.get(`${API_URL}/cart`),
          axios.get(`${API_URL}/favorites`),
          axios.get(`${API_URL}/items`),
        ]);

        setIsLoading(false);

        setCartItems(cartItemsRes.data);
        setFavoritesItems(favoriteItemsRes.data);
        setItems(itemsRes.data);
      } catch (error) {
        alert('Не удалось загрузить данные с сервера');
        console.log(error.message);
      }
    }

    fetchData();
  }, []);

  const onAddToCart = async product => {
    const findItem = cartItems.find(el => +el.parentId === +product.id);

    try {
      if (findItem) {
        setCartItems(prev =>
          prev.filter(item => +item.parentId !== +product.id),
        );
        await axios.delete(`${API_URL}/cart/${findItem.id}`);
      } else {
        setCartItems(prev => [...prev, product]);
        const { data } = await axios.post(`${API_URL}/cart`, product);
        setCartItems(prev =>
          prev.map(item => {
            if (+item.parentId === +data.parentId) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          }),
        );
      }
    } catch (error) {
      alert('Не удалось добавить товар в корзину');
      console.log(error.message);
    }
  };

  const onRemoveFromCart = async id => {
    try {
      setCartItems(prev => prev.filter(item => +item.id !== +id));
      await axios.delete(`${API_URL}/cart/${id}`);
    } catch (error) {
      alert('Не удалось убрать товар из корзины');
      console.log(error.message);
    }
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
      alert('Не удалось добавить товар в закладки');
      console.log(error.message);
    }
  };

  const isInCart = id => cartItems.some(item => +item.parentId === +id);

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
        <Drawer
          items={cartItems}
          onItemRemove={onRemoveFromCart}
          onClose={() => setIsCartOpened(false)}
          opened={isCartOpened}
        />
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
