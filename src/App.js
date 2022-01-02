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
          background: "rgb(201, 201, 224)",
        }}
      >
        <NavLink
          style={({ isActive }) => {
            return {
              // display: "block",
              margin: "1rem 0",
              color: isActive ? "darkblue" : "black",
              fontWeight: isActive ? "bold" : "",
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
              color: isActive ? "darkblue" : "black",
              fontWeight: isActive ? "bold" : "",
              textDecoration: !isActive && "none",
            };
          }}
          to="/movies"
        >
          Movies
        </NavLink>
      </nav>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            {/* <Route path="/movies/id" element={<MovieDetailsPage />}> */}
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

// '/' - komponent <HomePage>, strona domowa z listą popularnych filmów.
// '/movies' - komponent <MoviesPage>, strona wyszukiwania filmów po słowie kluczu.
// '/movies/:movieId' - komponent <MovieDetailsPage>, strona ze szczegółowymi informacjami o filmie.
// /movies/:movieId/cast - komponent <Cast>, informacja o zespole aktorskim. Renderuje się na stronie <MovieDetailsPage>.
// /movies/:movieId/reviews - komponent <Reviews>, informacja o recenzjach. Renderuje się n stronie <MovieDetailsPage>.
