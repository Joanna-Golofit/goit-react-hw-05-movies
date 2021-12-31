import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

const MovieDetailsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const goBack = () => {
    
    if (location.pathname !== "/movies/id") {
      console.log("if location", location.pathname);
      navigate(-1);
    }
    navigate(-1);
   
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
