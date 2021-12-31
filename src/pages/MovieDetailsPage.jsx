import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { getApiData } from "./../utils/apiCalls";
import { KEY } from "./../utils/apiKey";

const MovieDetailsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [fetchedMovie, setFetchedMovie] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();



  const goBack = () => {
    navigate(-1);
    if (
      location.pathname === "/movies/id/cast" ||
      location.pathname === "/movies/id/reviews"
    ) {
      console.log("if location1", location.pathname);
      navigate(-1);
    }
   
  }

  useEffect(() => {
    getApiData(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${KEY}`)
      .then((data) => {
        console.log("pobrano z Api by ID:", data);
        setFetchedMovie(data);
      })
      .catch((err) => {
        console.log("moj log z error.name", err.name);
        setError(err);
      });
  }, [movieId]);

  console.log("currently", location.pathname);

  const {
    original_title,
    release_date,
    vote_average,
    poster_path,
    overview,
    genres,
  } = fetchedMovie;
  // const year = release_date.slice(0, 4);
  return (
    <div>
      <button onClick={goBack}>&larr; Go back</button>
      MovieDetailsPage
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      <div className="movie">
        <div className="movieImg">
          <img src={poster_path} alt={original_title} />
        </div>
        <div className="movieDetails">
          <h1>
            {/* {original_title} ({release_date.slice(0, 4)}) */}
            {/* {original_title} ({year}) */}
            {original_title} ({release_date})
          </h1>
          <p>User Score: {((vote_average / 10) * 100).toFixed()}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h3>Genres</h3>
          {/* <p>{genres.map((g) => g.name)}</p> */}
        </div>
      </div>
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

////////////////////////////// to bylo w goBack
//  if (location.pathname !== "/movies/id") {
//       console.log("if location2", location.pathname);
//       navigate(-1);
//     }

//     if (location.pathname === "/movies/id") {
//       console.log("if location - pathname === /movies/id", location.pathname);

//       navigate(-1);
//     }