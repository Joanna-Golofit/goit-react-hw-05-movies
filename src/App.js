import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Cast from "./components/Cast";
import Reviews from "./components/Reviews";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import MoviesPage from "./pages/MoviesPage";

function App() {
  return (
    <BrowserRouter>
      <nav
        style={{
          borderBottom: "solid 1px",
          padding: "1rem",
          background: "gray",
        }}
      >
        <NavLink
          style={({ isActive }) => {
            return {
              // display: "block",
              margin: "1rem 0",
              color: isActive ? "darkred" : "",
              textDecoration: !isActive && "none",
            };
          }}
          to="/"
        >
          Home
        </NavLink>{" "}
        |{" "}
        <NavLink
          style={({ isActive }) => {
            return {
              // display: "block",
              margin: "1rem 0",
              color: isActive ? "darkred" : "",
              textDecoration: !isActive && "none",
            };
          }}
          to="/movies"
        >
          Movies
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path=":movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<HomePage />} />
      </Routes>
      <div className="App">yyyy</div>
    </BrowserRouter>
  );
}

export default App;

// '/' - komponent <HomePage>, strona domowa z listą popularnych filmów.
// '/movies' - komponent <MoviesPage>, strona wyszukiwania filmów po słowie kluczu.
// '/movies/:movieId' - komponent <MovieDetailsPage>, strona ze szczegółowymi informacjami o filmie.
// /movies/:movieId/cast - komponent <Cast>, informacja o zespole aktorskim. Renderuje się na stronie <MovieDetailsPage>.
// /movies/:movieId/reviews - komponent <Reviews>, informacja o recenzjach. Renderuje się n stronie <MovieDetailsPage>.
