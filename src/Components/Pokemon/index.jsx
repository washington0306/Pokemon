import React, { useContext, useRef, useState } from 'react';
import FavoriteContext from '../../contexts/Favorites/context';
import hover3D from '../../handlers/hover3d';
import { config_3dCard, heart } from './data';

import './styles.css';

const Pokemon = (props) => {
  const { favorites, updateFavoritesPokemons } = useContext(FavoriteContext);
  const { pokemon } = props;

  const cardRef = useRef(null);

  const [rotate3d, setRotate3d] = useState({});

  const handleMove = ({ pageX, pageY }) => {
    if (cardRef.current) hover3D(pageX, pageY, config_3dCard, cardRef.current, setRotate3d);
  };
  const handleTouchMove = (event) => {
    event.preventDefault();
    const { pageX, pageY } = event.touches[0];
    handleMove({ pageX, pageY });
  };

  const handleLeave = () => {
    setRotate3d({});
  };

  const onHeartClick = () => {
    updateFavoritesPokemons(pokemon.name);
  };

  const handleBackgroundColor = () => {
    const { name: pokemonType } = pokemon.types[0].type;

    switch (pokemonType) {
      case 'grass':
        return '#40dd0c';
      case 'fire':
        return '#E67E22';
      case 'water':
        return '#B9F2F5';
      case 'normal':
        return '#F1C40F';
      case 'bug':
        return '#27AE60';
      case 'poison':
        return '#D2B4DE ';
      case 'electric':
        return '#EC7063 ';
      case 'ground':
        return '#D35400';
      case 'fairy':
        return '#e384d3';
      case 'fighting':
        return '#F9E79F ';
      case 'psychic':
        return '#AF7AC5 ';
      case 'rock':
        return '#5D6D7E';
      case 'ghost':
        return '#aa9aeb';
      case 'ice':
        return '#a2b6c5';
      case 'dragon':
        return '#d90303';
      case 'dark':
        return '#91B8AB';
      case 'steel':
        return '#16a8b7';

      default:
        return '#fff';
    }
  };

  const styles = {
    backgroundColor: handleBackgroundColor(),
  };

  const renderType = () => (
    <div className="pokemon-type">
      <div className="wrapper-type">
        {pokemon.types.map((type, index) => {
          return (
            <div key={index} className="pokemon-type-text">
              {type.type.name}
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div
      className="pokemon-card"
      ref={cardRef}
      onMouseMove={handleMove}
      onTouchMove={handleTouchMove}
      onMouseLeave={handleLeave}
      onTouchEnd={handleLeave}
    >
      <div className="card-body" style={{ ...rotate3d, ...styles }}>
        <div className="left-content">
          <h3>{pokemon.name}</h3>
          {renderType()}
        </div>
        <img alt={pokemon.name} src={pokemon.sprites.front_default} className="pokemon-image" />
        <div className="right-content">
          <div> # {pokemon.id}</div>
          <button className="pokemon-heart-btn" onClick={onHeartClick}>
            {heart(favorites.includes(pokemon.name))}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Pokemon;
