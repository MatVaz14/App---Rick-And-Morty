import React, { useState } from "react";
import validate from "../Validate/validate";
import style from "./Form.module.css";

import instaLogo from "../../img/instagramLogo.png";
import linkedinLogo from "../../img/logoLinkedin.png";
import logoGithub from "../../img/logoGithub.png";

export default function Form({ login }) {
  const [userData, setUserData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({ username: "", password: "" });

  const handleInputChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validate({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div className={style.container}>
      <div className={style.containerForm}>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className={style.inputStyle}>
            <p>Username</p>
            <input
              className={style.inputEnter}
              type="email"
              name="username"
              placeholder="Enter Username"
              onChange={(event) => handleInputChange(event)}
              required
            ></input>
          </div>
          <div className={style.errorContainer}>
            <label className={style.error}>{errors.username}</label>
          </div>
          <div className={style.inputStyle}>
            <p>Password</p>
            <input
              className={style.inputEnter}
              type="text"
              name="password"
              placeholder="Enter Password"
              onChange={(event) => handleInputChange(event)}
              required
            ></input>
          </div>
          <div className={style.errorContainer}>
            <label className={style.error}>{errors.password}</label>
          </div>
          <div className={style.buttonContainer}>
            <button className={style.buttonStyle} type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

//Object.key lo que hace es devolver un array con las propiedades del error
/*
          {Object.keys(errors).length === 0 ? (
            <button type="submit">Login</button>
          ) : null}
*/
