import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"; // Es para que pueda funcionar redux dev tools en el navegador
import thunk from "redux-thunk"; // es un Middleware
import rootReducer from "./reducer";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// Redux devtools
export default store;
