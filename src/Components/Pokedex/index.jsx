import React from 'react';
import Pagination from '../Pagination/index';
import Pokemon from '../Pokemon';
import pokeball from '../../assets/loading.png';

import './styles.css';

const Pokedex = (props) => {
  const { pokemons, loading, page, setPage, totalPages } = props;

  const onLeftClickHandler = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };
  const onRightClickHandler = () => {
    if (page + 1 !== totalPages) {
      setPage(page + 1);
    }
  };
  return (
    <>
      <div className="pokedex-header">
        <Pagination
          page={page + 1}
          totalPages={totalPages}
          onLeftClick={onLeftClickHandler}
          onRightClick={onRightClickHandler}
        />
      </div>
      {loading ? (
        <div className="loading">
          <img className="loading-child" src={pokeball} />
        </div>
      ) : (
        <div className={`pokedex-grid ${pokemons.length === 1 ? 'searching' : ''}`}>
          {pokemons &&
            pokemons.map((pokemon, index) => {
              return <Pokemon key={index} pokemon={pokemon} />;
            })}
        </div>
      )}
    </>
  );
};

export default Pokedex;
