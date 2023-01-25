import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "./Card.module.css";
import { addFavorites, deleteFavorites } from "../../Redux/actions";

export default function Card(props) {
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = (character) => {
    if (isFav) {
      setIsFav(false);
      dispatch(deleteFavorites(character.id));
    } else {
      setIsFav(true);
      dispatch(addFavorites(character));
    }
  };

  useEffect(() => {
    myFavorites.forEach((character) => {
      if (character.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={style.containerCard}>
      <div className={style.containerCloseAndFavorite}>
        {isFav ? (
          <button
            className={style.buttonFavorite}
            onClick={() => handleFavorite(props)}
          >
            ❤️
          </button>
        ) : (
          <button
            className={style.buttonFavorite}
            onClick={() => handleFavorite(props)}
          >
            ❤
          </button>
        )}
        <button className={style.buttonClose} onClick={props.onClose}>
          X
        </button>
      </div>
      <div className={style.containerName}>
        <Link className={style.link} to={`/detail/${props.id}`}>
          <h2>{props.name}</h2>
        </Link>
      </div>
      <div>
        <img src={props.image} alt={props.name} />
      </div>
      <div className={style.containerDetail}>
        <h4>{props.species}</h4>
        <h4>{props.gender}</h4>
      </div>
    </div>
  );
}
