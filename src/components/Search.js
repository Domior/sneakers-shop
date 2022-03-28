const Search = () => {
  return (
    <div className="search-block d-flex align-center">
      <img
        width={18}
        height={18}
        src="/img/search.svg"
        alt="searchIcon"
      />
      <input placeholder="Поиск..." />
    </div>
  );
};

export default Search;
