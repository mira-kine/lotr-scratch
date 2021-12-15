import './App.css';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';
import Characters from './views/Characters/Characters';
import Films from './views/Films/Films';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavLink to="/characters" data-testid="chars-link">
            Characters
          </NavLink>
          <NavLink to="/films" data-testid="film-link">
            Films
          </NavLink>
          <NavLink to="/books" data-testid="book-link">
            Books
          </NavLink>
        </header>
        <Switch>
          <Route path="/characters">
            <Characters />
          </Route>
          <Route path="/films">
            <Films />
          </Route>
          <Route exact path="/"></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
