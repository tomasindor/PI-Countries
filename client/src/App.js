import { Landing, Detail, Form, Home, NavBar } from "./views";
import { BrowserRouter as Router, useLocation, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "./redux/actions";
import { useEffect } from "react";
import style from "./App.css";
function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}

      <Route exact path="/">
        <Landing />
      </Route>
      <Route exact path="/detail/:id">
        <Detail />
      </Route>
      <Route exact path="/create">
        <Form />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
    </div>
  );
}

export default App;
