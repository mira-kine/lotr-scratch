import './App.css';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';
import Characters from './views/Characters/Characters';
import Films from './views/Films/Films';
import Main from './views/Main/Main';
import Books from './views/Books/Books';
function App() {
  return (
    <div className="App">
      <h1>Lord of the Rings</h1>
      <BrowserRouter>
        <header>
          <NavLink to="/main" data-testid="main-link">
            Home
          </NavLink>
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
          <Route path="/books">
            <Books />
          </Route>
          <Route exact path="/main">
            <Main />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
