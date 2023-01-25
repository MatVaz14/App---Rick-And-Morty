import {
  ADD_FAVORITES,
  DELETE_FAVORITES,
  FILTER_CARDS,
  ORDER_CARDS,
  RESET,
} from "./action_type";

export const addFavorites = (character) => {
  return {
    type: ADD_FAVORITES,
    payload: character,
  };
};

export const deleteFavorites = (id) => {
  return {
    type: DELETE_FAVORITES,
    payload: id,
  };
};

export const filterCards = (status) => {
  return {
    type: FILTER_CARDS,
    payload: status,
  };
};

export const orderCards = (id) => {
  return {
    type: ORDER_CARDS,
    payload: id,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};
