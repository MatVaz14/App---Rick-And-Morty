import {
  ADD_FAVORITES,
  DELETE_FAVORITES,
  FILTER_CARDS,
  ORDER_CARDS,
  RESET,
} from "./action_type";

const initialState = {
  myFavorites: [], // Este es el que usariamos para filtrar, es una copia de myFavorites, cosa de que cuando filtremos y volvamos a hacer el filtro, recuperemos los datos
  myFavoritesOrigin: [],
};

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_FAVORITES:
      return {
        ...state,
        myFavorites: [...state.myFavoritesOrigin, payload], //Filtros
        myFavoritesOrigin: [...state.myFavoritesOrigin, payload], //Original
      };

    case DELETE_FAVORITES:
      const filtered = state.myFavorites.filter((character) => {
        return character.id !== payload;
      });
      return {
        ...state,
        myFavorites: filtered,
        myFavoritesOrigin: filtered,
      };

    case FILTER_CARDS:
      const filterCopy = [...state.myFavoritesOrigin];
      const filter = filterCopy.filter(
        (character) => character.gender === payload
      ); // El payload que le vamos a pasar seria masculiano, femenino, etc
      return {
        ...state,
        myFavorites: filter,
      };

    case ORDER_CARDS:
      const orderCopy = [...state.myFavoritesOrigin];
      console.log("payload", payload);
      const order = orderCopy.sort((a, b) => {
        if (a.id > b.id) {
          return "Ascendente" === payload ? 1 : -1;
        }
        if (a.id < b.id) {
          return "Descendente" === payload ? 1 : -1;
        }
        return 0;
      });
      return {
        ...state,
        myFavorites: order,
      };
    case RESET:
      return {
        ...state,
        myFavorites: [...state.myFavoritesOrigin], //Filtros
      };

    default:
      return state;
  }
}
