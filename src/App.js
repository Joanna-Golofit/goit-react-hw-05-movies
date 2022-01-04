import "./App.css";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
const LazyCast = lazy(() => import("./components/Cast"));
const LazyReviews = lazy(() => import("./components/Reviews"));
const LazyHomePage = lazy(() => import("./pages/HomePage"));
const LazyMovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));
const LazyMoviesPage = lazy(() => import("./pages/MoviesPage"));

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
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<LazyHomePage />} />
            <Route path="/movies" element={<LazyMoviesPage />} />
            <Route path="/movies/:movieId" element={<LazyMovieDetailsPage />}>
              <Route path="cast" element={<LazyCast />} />
              <Route path="reviews" element={<LazyReviews />} />
            </Route>
            <Route path="*" element={<LazyHomePage />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;