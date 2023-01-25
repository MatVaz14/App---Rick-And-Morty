import Card from "../Card/Card";
import style from "./Cards.module.css";

export default function Cards(props) {
  const { characters } = props; // Characters seria el arreglo que lo traemos de data.js
  return (
    <div className={style.container}>
      <div className={style.containerCards}>
        {characters.map((character) => (
          <Card //PASAMOS PROPS...
            id={character.id}
            key={character.name}
            name={character.name}
            species={character.species}
            gender={character.gender}
            image={character.image}
            onClose={() => props.onClose(character.id)}
          />
        ))}
      </div>
    </div>
  );
}
