const regexUsername =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexPassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;

export default function validate(inputs) {
  const errors = {};
  if (!inputs.username) {
    errors.username = "El username no debe estar vacio";
  } else if (!regexUsername.test(inputs.username)) {
    errors.username = "El username debe ser un correo electronico";
  } else if (inputs.username.length > 35) {
    errors.username = "El username no puede tener mas de 35 caracteres";
  }

  if (!inputs.password) {
    errors.password = "El password no debe estar vacio";
  } else if (!regexPassword.test(inputs.password)) {
    errors.password =
      "El password debe tener una longitud entre 6 y 10 caracteres y al menos 1 caracter especial";
  }
  return errors;
}

/*
const regexPassword = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$";
Minimo 6 caracteres
Maximo 10
Al menos una letra minuscula
Al menos una letra mayuscula
Al menos un caracter especial
No espacios en blanco
*/
