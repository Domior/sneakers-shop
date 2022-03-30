import Card from '../components/Card';

const Favorites = ({ items, onAddToCart, onAddToFavorites }) => {
  return (
    <div className="content p-40">
      <h1> Мои закладки</h1>

      <div className="d-flex flex-wrap justify-around">
        {items.map(item => (
          <Card
            isInFavorites={true}
            onPlusClick={() => onAddToCart(item)}
            onFavoriteClick={() => onAddToFavorites(item)}
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
