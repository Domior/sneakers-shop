import React from 'react';

import Search from '../components/Search';
import Card from '../components/Card';

import { AppContext } from '../context';

const Home = () => {
  const { items, searchValue, onAddToCart, onAddToFavorites, isLoading } =
    React.useContext(AppContext);

  const renderItems = () => {
    const filteredItems = items.filter(item =>
      item.title.toLowerCase().includes(searchValue.toLowerCase()),
    );
    return (isLoading ? [...Array(8)] : filteredItems).map((item, i) => (
      <Card
        key={item ? item.id : i}
        onPlusClick={product => onAddToCart(product)}
        onFavoriteClick={product => onAddToFavorites(product)}
        isLoaded={isLoading}
        {...item}
      />
    ));
  };
  return (
    <div className="content p-40">
      <Search />
      <div className="itemsContainer">{renderItems()}</div>
    </div>
  );
};

export default Home;
