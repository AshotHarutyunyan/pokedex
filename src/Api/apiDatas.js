import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

export const pokemonsAPI = {
  getPokemons(offset = 0, limit = 20) {
    return instance
      .get(`pokemon/?offset=${offset}&limit=${limit}`)
      .then((response) => {
        return response.data;
      });
  },
  getPokemonsById(link) {
    return axios.get(`${link}`).then((response) => {
      return response.data;
    });
  },
};
