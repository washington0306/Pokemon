const getPokemonData = async (url) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log('error:', error);
  }
};

export default getPokemonData;
