import React from "react";
import { useState } from "react";
import style from "./SearchBar.module.css";

export default function SearchBar(props) {
  const [input, setInput] = useState("");

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className={style.containerInputs}>
      <input
        className={style.inputStyle}
        type="text"
        name="search"
        placeholder="Type id"
        onChange={(event) => handleInput(event)}
        value={input}
      />
      <button
        className={style.buttonStyle}
        onClick={() => props.onSearch(input)}
      >
        Agregar
      </button>
    </div>
  );
}
