import styles from "./App.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";
export function App() {
  return (
    <Router>
      <header>
        <hr className={styles.hr} />
        <Link to="/">
          {" "}
          <h1 className={styles.title}>🍿 Movies 🍿</h1>{" "}
        </Link>
        <hr className={styles.hr1} />
        <Link to="/"></Link>
        <br />
        <Link to="/movie"></Link>
      </header>
      <main>
        <Switch>
          <Route exact path="/movies/:movieId">
            <MovieDetails />
          </Route>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/"> El url al que quieres ingresar no Existe </Route>
        </Switch>
      </main>
    </Router>
  );
}
