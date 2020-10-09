import { pokemonsAPI } from "../Api/apiDatas";

export const filterItems = (items, filterBy) => {
  let arr = items.filter((item) => {
    if (item.name.includes(filterBy.toLowerCase())) {
      return item;
    }
    return null;
  });

  const data = arr.map((element) => {
    return pokemonsAPI.getPokemonsById(element.url).then((response) => {
      return response.sprites.front_default;
    });
  });

  return Promise.all(data).then((res) => {
    return res;
  });
};
