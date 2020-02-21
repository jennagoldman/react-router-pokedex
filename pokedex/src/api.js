import request from 'superagent';

export const getPokemon = (name) => request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${name}`)