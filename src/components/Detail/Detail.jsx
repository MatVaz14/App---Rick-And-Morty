import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css";

export default function Detail(props) {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]); // Cada vez que cambie detailId se ejecutaria useEffect

  return (
    <div className={style.container}>
      <div className={style.containerDetail}>
        <h1>{character.name}</h1>
        <div className={style.containerDetails}>
          <h3>{character.status}</h3>
          <p>{character.species}</p>
          <p>{character.gender}</p>
          <p>{character.origin?.name}</p>
        </div>
      </div>
      <div className={style.containerImg}>
        <img className={style.styleImg} src={character.image} />
      </div>
    </div>
  );
}

//El signo de pregunta basicamente dice, che si no hay nada, no hagas nada, asi no rompe todo
