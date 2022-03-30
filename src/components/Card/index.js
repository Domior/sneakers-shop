import React from 'react';

import styles from './Card.module.scss';

const Card = ({
  id,
  title,
  price,
  img,
  onPlusClick,
  onFavoriteClick,
  isInFavorites = false,
}) => {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(isInFavorites);

  const handlePlusClick = () => {
    onPlusClick({ id, title, price, img });
    setIsAdded(!isAdded);
  };

  const handleFavoritesClick = () => {
    onFavoriteClick({ id, title, price, img });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={handleFavoritesClick}>
        <img
          src={
            isFavorite ? '/img/favorite-filled.svg' : '/img/favorite-empty.svg'
          }
          alt="favorite"
        />
      </div>
      <img width={133} height={112} src={img} alt="sneaker" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} $</b>
        </div>
        <img
          className={styles.plusButton}
          src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'}
          alt="plusIcon"
          onClick={handlePlusClick}
        />
      </div>
    </div>
  );
};

export default Card;
