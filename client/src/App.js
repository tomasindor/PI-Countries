import { Landing, Detail, Form, Home, NavBar } from "./views";
import {
  BrowserRouter as Router,
  useLocation,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <Router>
      <div className="App">
        {location.pathname !== "/" && <NavBar />}
        <Switch>
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
