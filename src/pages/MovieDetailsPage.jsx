import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { getApiData } from "./../utils/apiCalls";
import { KEY } from "./../utils/apiKey";
import style from "./MovieDetailsPage.module.css"

const MovieDetailsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [fetchedMovie, setFetchedMovie] = useState(0);
  const [error, setError] = useState(null);
  const [fromPage, setFromPage] = useState(null);
  const { movieId } = useParams();

  
  useEffect(() => {
    setFromPage(location.state.from);
    getApiData(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${KEY}`)
      .then((data) => {
        // console.log("pobrano z Api by ID:", data);
        setFetchedMovie(() => data);
      })
      .catch((err) => {
        console.log("moj log z error.name", err.name);
        setError(err);
      });
    }, []);
    
    // console.log("fetchedMovie?", fetchedMovie);

  const goBack = () => {
       navigate(fromPage);   
  }

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
    <div className={style.movieDetailsContainer}>
      <button onClick={goBack}>&larr; Go back</button>
      {/* MovieDetailsPage */}
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      {fetchedMovie && (<div className={style.movie}>
        <div className={style.movieImg}>
          <img
            src={`https://image.tmdb.org/t/p/w200${poster_path}`}
            alt={original_title}
          />
        </div>
        <div className={style.movieDetails}>
          <h1>
            {original_title} ({release_date.slice(0, 4)})
            {/* {original_title} ({year}) */}
            {/* {original_title} ({release_date}) */}
          </h1>
          <p>User Score: {((vote_average / 10) * 100).toFixed()}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h3>Genres</h3>
          {/* {genres} */}
          <p>{genres.map((g) => g.name).join(", ")}</p>
        </div>
      </div>
      )}
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
