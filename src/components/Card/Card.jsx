import React from 'react';
import ContentLoader from 'react-content-loader';

import { AppContext } from '../../context';

import styles from './Card.module.scss';

const Card = ({
  id,
  title,
  price,
  img,
  onPlusClick,
  onFavoriteClick,
  isInFavorites = false,
  isLoaded = false,
}) => {
  const { isInCart } = React.useContext(AppContext);

  const [isFavorite, setIsFavorite] = React.useState(isInFavorites);

  const obj = { id, parentId: id, title, price, img };

  const handlePlusClick = () => {
    onPlusClick(obj);
  };

  const handleFavoritesClick = () => {
    onFavoriteClick(obj);
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      {isLoaded ? (
        <ContentLoader
          speed={2}
          width={175}
          height={245}
          viewBox="0 0 180 260"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb">
          <rect x="0" y="0" rx="10" ry="10" width="180" height="150" />
          <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
          <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
          <rect x="0" y="225" rx="5" ry="5" width="80" height="32" />
          <rect x="145" y="225" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          {onFavoriteClick && (
            <div className={styles.favorite} onClick={handleFavoritesClick}>
              <img
                src={
                  isFavorite
                    ? 'img/favorite-filled.svg'
                    : 'img/favorite-empty.svg'
                }
                alt="favorite"
              />
            </div>
          )}
          <img width="100%" height={150} src={img} alt="sneaker" />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>{price} $</b>
            </div>
            {onPlusClick && (
              <img
                className={styles.plusButton}
                src={isInCart(id) ? 'img/btn-checked.svg' : 'img/btn-plus.svg'}
                alt="plusIcon"
                onClick={handlePlusClick}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
