import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

const MovieDetailsPage = () => {
  const navigate = useNavigate();

  const location = useLocation();
  console.log(location.pathname);
  return (
    <div>
      <button onClick={() => navigate(-1)}>&larr; go back</button>
      <p style={{ color: "lightgreen" }}>
        &larr; GO BACK - navigate (-1) by sie przydal?
      </p>
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
