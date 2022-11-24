import React, { useRef, useState } from 'react';

import './styles.css';

const SearchBar = (props) => {
  const [search, setSearch] = useState();
  const { onSearch } = props;
  const searchRef = useRef(null);

  const onChangeHandle = (e) => {
    setSearch(e.target.value);
  };
  const onbuttonClickHandler = () => {
    onSearch(search);
  };

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input
          className="input"
          placeholder="Buscar Pokémon"
          ref={searchRef}
          value={search}
          onChange={onChangeHandle}
        />
        <button className="searchbar-btn" onClick={onbuttonClickHandler}></button>
      </div>
    </div>
  );
};
export default SearchBar;
