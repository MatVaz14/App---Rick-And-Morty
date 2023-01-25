import React, { useEffect } from "react";
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { filterCards, orderCards, reset } from "../../Redux/actions";
import style from "./Favorites.module.css";

export default function Favorites({ characters, onClose }) {
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);

  const handleClick = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    if (name === "filter") {
      return dispatch(filterCards(value));
    }
    if (name === "order") {
      dispatch(orderCards(value));
    }
  };

  return (
    <div className={style.container}>
      <div className={style.containerFilters}>
        <div className={style.containerFilter}>
          <select
            className={style.selectStyle}
            defaultValue="DEFAULT"
            name="order"
            onChange={handleClick}
          >
            <option value="DEFAULT" disabled>
              Select Order
            </option>
            <option value="Ascendente">Ascendente</option>
            <option value="Descendente">Descendente</option>
          </select>
        </div>
        <div className={style.containerFilter}>
          <select
            className={style.selectStyle}
            defaultValue="DEFAULT"
            name="filter"
            onChange={handleClick}
          >
            <option value="DEFAULT" disabled>
              Select Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="Unknown">Unknown</option>
          </select>
        </div>
        <div>
          <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
      </div>
      <div className={style.containerCards}>
        {myFavorites?.map((character) => (
          <Card //PASAMOS PROPS...
            id={character.id}
            key={character.name}
            name={character.name}
            species={character.species}
            gender={character.gender}
            image={character.image}
            onClose={() => onClose(character.id)}
          />
        ))}
      </div>
    </div>
  );
}
