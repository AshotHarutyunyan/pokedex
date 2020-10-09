import { pokemonsAPI } from "../../Api/apiDatas";
import {
  setAllItemsAc,
  setError,
  setIsFiltered,
  setItemsAc,
  setRequestStatus,
} from "../actions/actioncreators";
import { filterItems } from "../../Helpers/FilterHelper";

export const setItems = (page, limit = 20) => (dispatch) => {
  try {
    dispatch(setRequestStatus(false));
    dispatch(setIsFiltered(false));
    pokemonsAPI.getPokemons(page, limit).then((response) => {
      const data = response.results.map((element) => {
        return pokemonsAPI.getPokemonsById(element.url).then((response) => {
          return response.sprites.front_default;
        });
      });

      Promise.all(data).then((res) => {
        dispatch(setItemsAc(res));
        dispatch(setRequestStatus(true));
      });
    });
  } catch (error) {
    dispatch(setRequestStatus(true));
    dispatch(setError(error));
  }
};

export const filterAndSetItems = (allItems, text) => (dispatch) => {
  try {
    dispatch(setRequestStatus(false));
    filterItems(allItems, text).then((res) => {
      dispatch(setItemsAc(res));
      if (res.length > 0) {
        dispatch(setIsFiltered(true));
      } else {
        dispatch(setIsFiltered(false));
      }
      dispatch(setRequestStatus(true));
    });
  } catch (error) {
    dispatch(setRequestStatus(true));
    dispatch(setError(error));
  }
};

export const setAllItems = (allItemsCount = 2000) => (dispatch) => {
  try {
    pokemonsAPI.getPokemons(0, allItemsCount).then((res) => {
      dispatch(setAllItemsAc(res.results));
    });
  } catch (error) {
    dispatch(setError(error));
  }
};
