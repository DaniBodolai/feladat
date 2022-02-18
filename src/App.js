import './App.css';
import { BrowserRouter, NavLink, Redirect, Route, Switch } from "react-router-dom";
import {InstrumentListPage} from "./instrumentListPage";
import {InstrumentSinglePage} from "./instrumentsinglepage";
function App() {
  return (
    <BrowserRouter>
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        <li className="nav-item  App-logo text-decoration-none">
            <NavLink to={'/'} activeClassName="active" exact>
             <h3><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-music-note-beamed" viewBox="0 0 16 16">
  <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z"/>
  <path fillRule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z"/>
  <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z"/>
</svg> HangszerPalota</h3>
            </NavLink>
          </li>
          <li className="nav-item nanav text-decoration-none">
            <NavLink to={'/instrumentListPage'} activeClassName="active" exact>
              <span className="nav-link">Hangszerek</span>
            </NavLink>
          </li>
          <li className="nav-item nanav text-decoration-none">
            <NavLink to={'/uj-hangszer'} activeClassName="active">
              <span className="nav-link">Új hangszer</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
    <Switch>

    <Route path="/" exact>Kezdőlap</Route>
      <Route path="/instrumentListPage"component={InstrumentListPage} />


      <Route path="/hangszer/:hangszerId"component={InstrumentSinglePage}>
     
      </Route>
      <Route path="/uj-hangszer">
      Új hangszer létrehozó oldal
      </Route>
      <Route>
        <Redirect to={"/"} />
      </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
