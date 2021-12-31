import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getApiData } from "../utils/apiCalls";

const HomePage = () => {
  const [fetchedMovies, setFetchedMovies] = useState([]);
  const [error, setError] = useState(null);


  useEffect(() => {
     getApiData(
       "https://api.themoviedb.org/3/movie/550?api_key=4c868f688ccaa6211ab12d77fba2ebd8"
     )
       .then((data) => {
         console.log("pobrano z Api:", data);
         setFetchedMovies(data);
       })
       .catch((err) => {
         console.log("moj log z error.name", err.name);
         setError(err);
       })
       .finally(() => console.log("finally"));
  }, [])
  return (
    <div>
      HomePage - strona domowa z listą popularnych filmów.
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      <h1>Trending today</h1>
      <ul>
        <li>filmy...</li>
        <li>linki...</li>
        <li>duzo...</li>
        <li>
          <Link to="movies/id">jakis film z id</Link>
        </li>
        {/* {fetchedMovies.map((movie) => ( */}
        {/* <li key={movie.id}>{movie.original_title}</li> */}
        {/* ))} */}
        {
          <li key={fetchedMovies.id}>
            <Link to={`movies/${fetchedMovies.id}`}>{fetchedMovies.original_title}</Link>
          </li>
        }
      </ul>
    </div>
  );
}

export default HomePage
