import Card from '../components/Card';

const Home = ({
  items,
  searchValue,
  setSearchValue,
  onAddToCart,
  onAddToFavorites,
}) => {
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>
          {searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}
        </h1>
        <div className="search-block d-flex align-center">
          <img width={18} height={18} src="/img/search.svg" alt="searchIcon" />
          <input
            placeholder="Поиск..."
            value={searchValue}
            onChange={event => setSearchValue(event.target.value)}
          />
          {searchValue && (
            <img
              className="removeBtn"
              src="/img/btn-remove.svg"
              alt="clearBtn"
              onClick={() => setSearchValue('')}
            />
          )}
        </div>
      </div>

      <div className="d-flex flex-wrap justify-around">
        {items
          .filter(item =>
            item.title.toLowerCase().includes(searchValue.toLowerCase()),
          )
          .map(item => (
            <Card
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

export default Home;
