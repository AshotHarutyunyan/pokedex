import {
  SET_ALL_ITEMS,
  SET_CURRENT_PAGE,
  SET_ERROR,
  SET_ISFILTERED,
  SET_ITEMS,
  SET_LIMIT,
  SET_REQUEST_STATUS,
} from "./actiontypes";

export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});

export const setAllItemsAc = (items) => ({
  type: SET_ALL_ITEMS,
  payload: items,
});

export const setRequestStatus = (status) => ({
  type: SET_REQUEST_STATUS,
  payload: status,
});

export const setIsFiltered = (bool) => ({
  type: SET_ISFILTERED,
  payload: bool,
});

export const setLimit = (limit) => ({ type: SET_LIMIT, payload: limit });

export const setError = (error) => ({ type: SET_ERROR, payload: error });

export const setItemsAc = (items) => ({ type: SET_ITEMS, payload: items });
