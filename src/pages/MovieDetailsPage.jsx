import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

const MovieDetailsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const goBack = () => {
    navigate(-1);
    if (
      location.pathname === "/movies/id/cast" ||
      location.pathname === "/movies/id/reviews"
    ) {
      console.log("if location1", location.pathname);
      navigate(-1);
    }
    // if (location.pathname !== "/movies/id") {
    //   console.log("if location2", location.pathname);
    //   navigate(-1);
    // }

    // if (location.pathname === "/movies/id") {
    //   console.log("if location - pathname === /movies/id", location.pathname);

      // navigate(-1);
    // }
  }

  console.log("currently", location.pathname);
  return (
    <div>
      <button onClick={goBack}>&larr; go back</button>
      MovieDetailsPage
      <p>zdjecie</p>
      <p>opis</p>
      <hr />
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <hr />
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
