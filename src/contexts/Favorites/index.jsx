import FavoriteContext from './context';
import React, { useState } from 'react';

const favoritesKey = 'pokedex-app-favorites';

const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const pokemons = JSON.parse(window.localStorage.getItem(favoritesKey));
    return pokemons ?? [];
  });

  const updateFavoritesPokemons = (name) => {
    const updateFavorites = [...favorites];
    const favoritesIndex = favorites.indexOf(name);
    if (favoritesIndex >= 0) {
      updateFavorites.splice(favoritesIndex, 1);
    } else {
      updateFavorites.push(name);
    }
    window.localStorage.setItem(favoritesKey, JSON.stringify(updateFavorites));
    console.log(JSON.parse(window.localStorage.getItem(favoritesKey)));
    setFavorites(updateFavorites);
  };

  return <FavoriteContext.Provider value={{ favorites, updateFavoritesPokemons }}>{children}</FavoriteContext.Provider>;
};

export default FavoriteProvider;
