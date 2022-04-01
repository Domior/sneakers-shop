import React from 'react';

import { AppContext } from '../../context';

import styles from './Search.module.scss';

const Search = () => {
  const { searchValue, setSearchValue } = React.useContext(AppContext);

  return (
    <div className="d-flex align-center justify-between mb-40">
      <h1>
        {searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}
      </h1>
      <div className={`${styles.searchBlock} d-flex align-center`}>
        <img width={18} height={18} src="img/search.svg" alt="searchIcon" />
        <input
          placeholder="Поиск..."
          value={searchValue}
          onChange={event => setSearchValue(event.target.value)}
        />
        {searchValue && (
          <img
            className={`${styles.removeBtn} removeBtn`}
            src="img/btn-remove.svg"
            alt="clearBtn"
            onClick={() => setSearchValue('')}
          />
        )}
      </div>
    </div>
  );
};

export default Search;
