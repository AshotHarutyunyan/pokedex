import {
  SET_ALL_ITEMS,
  SET_CURRENT_PAGE,
  SET_ISFILTERED,
  SET_ITEMS,
  SET_LIMIT,
  SET_REQUEST_STATUS,
} from "../actions/actiontypes";

let initialState = {
  currentpage: 1,
  limit: 20,
  items: [],
  allItems: [],
  error: "",
  isFiltered: false,
  requestStatus: false,
};

export const pokemons = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentpage: payload,
      };
    case SET_ITEMS:
      return {
        ...state,
        items: payload,
      };
    case SET_ALL_ITEMS:
      return {
        ...state,
        allItems: payload,
      };
    case SET_LIMIT:
      return {
        ...state,
        limit: payload,
      };
    case SET_REQUEST_STATUS:
      return {
        ...state,
        requestStatus: payload,
      };
    case SET_ISFILTERED:
      return {
        ...state,
        isFiltered: payload,
      };
    default:
      return state;
  }
};
