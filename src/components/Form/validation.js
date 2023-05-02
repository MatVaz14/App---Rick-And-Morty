export default function Validate(inputs) {
  const errors = {};

  const regexEmail = !/\S+@\S+\.\S+/;
  const regexPassword = new RegExp(
    "/^(?=[A-Za-z]+[0-9]|[0-9]+[A-Za-z])[A-Za-z0-9]{6,30}$/gm"
  );

  if (!/(?=.*[0-9])/.test(inputs.username)) {
    errors.username = "Name must be a valid email address";
  }
  if (!inputs.username) {
    errors.username = "Add your name";
  }
  if (inputs.username.length > 35) {
    errors.username = "Max length 35";
  }

  if (!regexPassword.test(inputs.password)) {
    errors.password = "Add pass 6-30 characters";
  }
  return errors;
}
