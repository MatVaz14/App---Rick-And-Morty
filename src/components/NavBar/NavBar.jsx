import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from "./NavBar.module.css";

export default function NavBar({ onSearch, logOut }) {
  return (
    <nav>
      <div>
        <Link className={style.linkStyle} to="/home">
          Rick And Morty - App
        </Link>
      </div>
      <div>
        <Link className={style.linkStyle} to="/favorites">
          Favorites
        </Link>
      </div>
      <div>
        <Link className={style.linkStyle} to="/about">
          About
        </Link>
      </div>
      <div>
        <Link className={style.linkStyle} to="/portfolio">
          Portafolio
        </Link>
      </div>
      <div className={style.containerSearch}>
        <SearchBar onSearch={onSearch} />
      </div>
      <div>
        <Link to="/">
          <button className={style.buttonLogout} onClick={() => logOut()}>
            Log Out
          </button>
        </Link>
      </div>
    </nav>
  );
}
