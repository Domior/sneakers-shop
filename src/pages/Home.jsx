import Card from '../components/Card';

const Home = ({
  items,
  cartItems,
  searchValue,
  setSearchValue,
  onAddToCart,
  onAddToFavorites,
  isLoading,
}) => {
  const renderItems = () => {
    const filteredItems = items.filter(item =>
      item.title.toLowerCase().includes(searchValue.toLowerCase()),
    );
    return (isLoading ? [...Array(8)] : filteredItems).map((item, i) => (
      <Card
        key={i}
        onPlusClick={() => onAddToCart(item)}
        onFavoriteClick={() => onAddToFavorites(item)}
        isInCart={cartItems.some(el => +el.id === +item.id)}
        isLoaded={isLoading}
        {...item}
      />
    ));
  };
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

      <div className="itemsContainer">{renderItems()}</div>
    </div>
  );
};

export default Home;
