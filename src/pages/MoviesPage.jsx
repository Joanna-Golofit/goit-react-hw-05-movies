import { Link, Outlet } from "react-router-dom";
// import Cast from "../components/Cast";
// import Reviews from "../components/Reviews";

const MoviesPage = () => {
  return (
    <div>
      MoviesPage
      <ul>additional information</ul>
      <li>
        <Link to="cast">Cast</Link>
      </li>
      <li>
        <Link to="reviews">Reviews</Link>
      </li>
      {/* <Outlet/> */}
    </div>
  );
};

export default MoviesPage;
