import React from 'react';

import Card from '../components/Card';

import { AppContext } from '../context';

const Favorites = () => {
  const { favoritesItems, onAddToFavorites, onAddToCart } =
    React.useContext(AppContext);

  return (
    <div className="content p-40">
      <h1 className="mb-40"> Мои закладки</h1>

      <div className="itemsContainer">
        {favoritesItems.map(item => (
          <Card
            key={item.id}
            isInFavorites={true}
            onPlusClick={() => onAddToCart(item)}
            onFavoriteClick={() => onAddToFavorites(item)}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
