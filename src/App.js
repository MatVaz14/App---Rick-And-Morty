import { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Cards from "./components/Cards/Cards.jsx";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import NavBar from "./components/NavBar/NavBar";
import Favorites from "./components/Favorites/Favorites";
import Portfolio from "./components/Portafolio/Portfolio";
import Landing from "./components/Landing/Landing";

function App() {
  const location = useLocation();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const username = "mativaz@gmail.com";
  const password = "Mati&1234";
  const navigate = useNavigate();

  const login = (userData) => {
    if (userData.password > 6 && userData.username) {
      setAccess(true);
      navigate("/home");
    }
  };
  const logOut = (userData) => {
    setAccess(false);
    navigate("/");
  };
  useEffect(() => {
    // Mientras que el acceso sea false, vamos a quedar en /, este se encarga de no dejarnos ir a Home
    !access && navigate("/");
  }, [access]);

  const onSearch = (id) => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          let exist = characters.find((element) => element.id === data.id);
          if (exist) {
            alert("Ese personaje ya existe");
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  };

  const onClose = (id) => {
    setCharacters((data) => {
      return data.filter((element) => element.id !== id);
    });
  };
//<Route exact path="/" element={<Form login={login} />}></Route>
  return (
    <div>
      <div>
        {location.pathname === "/" ? null : (
          <NavBar logOut={logOut} onSearch={onSearch} />
        )}
      </div>
      <Routes>
        <Route exact path="/" element={<Landing />}></Route>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/detail/:detailId" element={<Detail />}></Route>
        <Route
          path="/favorites"
          element={<Favorites characters={characters} onClose={onClose} />}
        ></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
      </Routes>
    </div>
  );
}

export default App;
