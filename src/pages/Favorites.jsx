import Card from '../components/Card';

const Favorites = ({ items, onAddToCart, onAddToFavorites }) => {
  return (
    <div className="content p-40">
      <h1 className="mb-40"> Мои закладки</h1>

      <div className="itemsContainer">
        {items.map(item => (
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
